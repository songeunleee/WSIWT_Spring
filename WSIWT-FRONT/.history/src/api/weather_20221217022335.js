import axios from "axios";
import { dfs_xy_conv } from "./xy";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export async function getUltraSrtFcst(latitude, longitude) {
  const now = new Date();

  let date =
    now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate();

  let time =
    (now.getHours() < 10 ? "0" : "") + (now.getHours() - 1).toString() + "30";

  if (now.getMinutes() > 45) {
    time = (now.getHours() < 10 ? "0" : "") + now.getHours() + "30";
  }

  if (now.getHours() === 0 && now.getMinutes() < 45) {
    date =
      now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate() - 1;
    time = "2330";
  }

  console.log(time);
  const rs = dfs_xy_conv(latitude, longitude);
  const res = await instance.get("/getUltraSrtFcst", {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date: date,
      base_time: time,
      nx: rs.x,
      ny: rs.y,
    },
  });
  return res.data.response.body.items.item;
}

export async function getVilageFcst(latitude, longitude) {
  const now = new Date();
  const rs = dfs_xy_conv(longitude, latitude);
  let date =
    now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate();

  const res = await instance.get("/getVilageFcst", {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date: date,
      base_time: "0200",
      nx: rs.x,
      ny: rs.y,
    },
  });

  returnres.data.response.body.items.item;
}
