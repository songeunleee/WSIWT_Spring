import axios from "axios";

export async function userChange() {
  const res = await axios.get(`/auth/login`);
  console.log(res.data);
  return res.data;
}
