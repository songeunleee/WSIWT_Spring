import axios from "axios";

export async function login() {
  const res = await axios.get(`/auth/login`);
  console.log(res);
  return res;
}
