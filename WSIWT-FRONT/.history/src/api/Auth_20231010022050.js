import axios from "axios";

export async function signin(username, password) {
  const res = await axios.get("http://localhost8080/auth/signin");
  console.log(res.data);
  return res.data;
}
