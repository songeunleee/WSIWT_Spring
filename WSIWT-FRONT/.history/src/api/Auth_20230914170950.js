import axios from "axios";

export async function login() {
  const res = await axios.get(`oauth2/authorization/google`);

  console.log(res);

  return res;
}
