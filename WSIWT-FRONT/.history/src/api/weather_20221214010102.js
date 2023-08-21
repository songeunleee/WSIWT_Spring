import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export function getUltraSrtFcst(latitude, longitude) {
  const now = new Date();

  const date =
    now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate();
  const time = now.getHours().toString() + now.getMinutes();

  if (now.getHours() === 0 && now.getMinutes() < 30) {
    const date =
      now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate() - 1;
  }

  console.log(now.getHours(), now.getMinutes());
  instance
    .get("/getUltraSrtFcst", {
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
    })
    .then((res) => res.data.response.body.items)
    .then(console.log);
}
