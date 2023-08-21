import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export async function getUltraSrtFcst(x, y) {
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

  const res = await instance.get("/getUltraSrtFcst", {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date: date,
      base_time: time,
      nx: Math.floor(latitude),
      ny: Math.floor(longitude),
    },
  });
  return res.data.response.body.items.item;
}

export async function getVilageFcst(latitude, longitude) {
  const res = await instance.get("/getVilageFcst", {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date: "20221216",
      base_time: "0200",
      nx: Math.floor(latitude),
      ny: Math.floor(longitude),
    },
  });

  return res.data.response.body.items.item;
}
