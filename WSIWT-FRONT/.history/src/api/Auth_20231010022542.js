import axios from "axios";

export async function signup(username, password) {
  const res = await axios.get("http://localhost:8080/auth/signin");
  console.log(res.data);
  return res.data;
}
