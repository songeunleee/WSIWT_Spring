import axios from "axios";

export async function signup(username, password) {
  const res = await axios
    .post("http://localhost:8080/auth/signup", {
      username,
      password,
    })
    .catch(console.log);
  console.log(res.data);
  return res.data;
}
