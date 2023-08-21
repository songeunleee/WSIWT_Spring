import axios from "axios";

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
  params: { ServiceKey: process.env.REACT_APP_API_KEY },
});

export function getUltraSrtFcst() {
  instance
    .get("getUltraSrtFcst", {
      params: {
        pageNo: 1,
        numOfRows: 1000,
        dataType: "XML",
        base_date: "22021214",
        base_time: "1930",
        nx: 55,
        my: 127,
      },
    })
    .then(console.log);
}
