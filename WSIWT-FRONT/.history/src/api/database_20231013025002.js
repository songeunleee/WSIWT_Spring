import axios from "axios";
import { call } from "./Auth";

export async function getOOTDs() {
  const res = await axios.get(`http://localhost:8080/ootds`);
  console.log(res.data);
  return res.data;
}

export function postOOTDs(saveDto) {
  console.log(1);
  axios.post("http://localhost:8080/api/v1/ootd",saveDto,{headers: {Authorization:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYTEyNzMyMjhiMjRkY2RjMDE4YjI0ZmQ1ZDBhMDAwMSIsImlzcyI6IldTSVdUIiwiaWF0IjoxNjk3MTMyNjcxLCJleHAiOjE2OTcyMTkwNzF9.4UP4Xi8jS1Sn65jt_QaUDKYLNVsyP4yEmHGHznr0ncC4r-N_WOWNzK6tX2U5xhy-gdJo9Tb6gGS8AODHmrSfcg"}}})
  return call("/api/v1/ootd", "POST", saveDto);
}
