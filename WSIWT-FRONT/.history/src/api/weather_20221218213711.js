import axios from "axios";
import { dfs_xy_conv } from "./xy";
import moment from "moment";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export async function getVilageFcst(latitude, longitude) {
  const today = moment().format("YYYYMMDD");
  const now = moment().format("HHmm");

  const rs = dfs_xy_conv(longitude, latitude);
  let basedate = today;
  let basetime = "0200";

  const res = await instance.get("/getVilageFcst", {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date: basedate,
      base_time: "0200",
      nx: rs.x,
      ny: rs.y,
    },
  });
  console.log(basedate);
  return res.data.response.body.items.item;
}
