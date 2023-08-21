import axios from "axios";

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
  params: { ServiceKey: process.env.REACT_APP_API_KEY },
});

const params = {
  pageNo: 1,
  numOfRows: 1000,
  dataType: "JSON",
  base_date: "22021214",
  base_time: "1930",
  nx: 55,
  my: 127,
};

export function getUltraSrtFcst() {
  instance.get("/getUltraSrtFcst", params).then(console.log);
}
