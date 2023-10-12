import axios from "axios";
import { call } from "./Auth";

export async function getOOTDs() {
  const res = await axios.get(`http://localhost:8080/ootds`);
  console.log(res.data);
  return call("/ootds", "GET");
}

export function postOOTD(saveDto) {
  return call("/api/v1/ootd", "POST", saveDto);
}
