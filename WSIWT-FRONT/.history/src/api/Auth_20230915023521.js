import axios from "axios";

export async function login() {
  const res = await axios.get(`http://localhost:8080`);
  console.log(res);
  return res;
}
