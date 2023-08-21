import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export function getUltraSrtFcst(latitude, longitude) {
  const now = new Date();
  const time =
    now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate() - 1;
  console.log(time);
  instance
    .get("/getUltraSrtFcst", {
      params: {
        serviceKey: process.env.REACT_APP_API_KEY,
        pageNo: 1,
        numOfRows: 1000,
        dataType: "JSON",
        base_date: "20221215",
        base_time: "2200",
        nx: Math.floor(latitude),
        ny: Math.floor(longitude),
      },
    })
    .then((res) => res.data.response.body.items)
    .then(console.log);
}
