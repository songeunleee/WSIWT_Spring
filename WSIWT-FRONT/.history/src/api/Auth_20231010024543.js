import axios from "axios";

export async function signup(username, password) {
  const res = await axios
    .post("http://localhost:8080/auth/signup", {
      username,
      password,
    })
    .catch((res) => console.log(res.response.data));
  console.log(res.data);
  return res.data;
}
