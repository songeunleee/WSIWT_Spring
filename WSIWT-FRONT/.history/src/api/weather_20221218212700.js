import axios from "axios";
import { dfs_xy_conv } from "./xy";
import moment from "moment";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export async function getVilageFcst(latitude, longitude) {
  const now = new Date();
  const rs = dfs_xy_conv(longitude, latitude);
  let date = moment().format("YYYYMMDD");

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
  console.log(date);
  return res.data.response.body.items.item;
}
