import axios from "axios";
import { dfs_xy_conv } from "./xy";
import moment from "moment";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export async function getVilageFcst(latitude, longitude) {
  const rs = dfs_xy_conv(longitude, latitude);

  const today = moment().format("YYYYMMDD");
  const yesterday = moment().subtract(1, "days").format("YYYYMMDD");
  const now = moment().format("HHmm");

  let basedate = today;
  let basetime = "0200";

  if (moment(now).isBetween("0000", "0211")) {
    basedate = yesterday;
    basetime = "2300";
  } else if (moment(now).isBetween("0211", "0511")) {
    basetime = "0200";
  } else if (moment(now).isBetween("0511", "0811")) {
    basetime = "0500";
  } else if (moment(now).isBetween("0811", "1111")) {
    basetime = "0800";
  } else if (moment(now).isBetween("1111", "1411")) {
    basetime = "1100";
  } else if (moment(now).isBetween("1411", "1711")) {
    basetime = "1400";
  } else if (moment(now).isBetween("1711", "2011")) {
    basetime = "1700";
  } else if (moment(now).isBetween("2011", "2311")) {
    basetime = "2000";
  } else {
    basetime = "2300";
  }

  const res = await instance.get("/getVilageFcst", {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date: basedate,
      base_time: basetime,
      nx: rs.x,
      ny: rs.y,
    },
  });

  return res.data.response.body.items.item.filter(
    (item) =>
      item.category !== "REH" &&
      item.category !== "UUU" &&
      item.category !== "VVV" &&
      item.category !== "WAV" &&
      item.category !== "VEC"&&
      item.category !== "TMN"&&
      item.category !== "TMX"&&
  );
}
