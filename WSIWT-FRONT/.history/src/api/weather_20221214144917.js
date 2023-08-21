import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
});

export function getUltraSrtFcst(latitude, longitude) {
  const now = new Date();

  let date =
    now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate();

  let time = (now.getHours() - 1).toString() + "30";

  if (now.getHours() < 10) {
    time = "0" + (now.getHours() - 1) + "30";
  }

  if (now.getMinutes() > 45) {
    time = now.getHours() < 10 ? "0" : "" + now.getHours() + "30";
  }

  if (now.getHours() === 0 && now.getMinutes() < 45) {
    date =
      now.getFullYear().toString() + (now.getMonth() + 1) + now.getDate() - 1;
    time = "2330";
  }

  console.log(time);
  console.log(now.getHours());
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
