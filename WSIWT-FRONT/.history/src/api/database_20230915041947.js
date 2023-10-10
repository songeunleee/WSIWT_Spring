import axios from "axios";

export async function getOOTDs() {
  const res = await axios.get(`http://locahost:8080/api/v1/ootds`);
  console.log(res.data);
  return res.data;
}
