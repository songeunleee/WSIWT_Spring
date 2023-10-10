import axios from "axios";

export async function login() {
  const res = await axios.get(`/`);
  console.log(res);
  return res;
}
