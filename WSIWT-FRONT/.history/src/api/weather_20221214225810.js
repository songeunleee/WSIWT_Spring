import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
  params: {
    serviceKey: process.env.REACT_APP_API_KEY,
    pageNo: 1,
    numOfRows: 1000,
    dataType: "XML",
    base_date: "22021214",
    base_time: "2200",
    nx: 55,
    ny: 127,
  },
});

const params = {};

export function getUltraSrtFcst() {
  instance
    .get("/getUltraSrtFcst")
    .then((res) => console.log(res.request.responseURL));
}
