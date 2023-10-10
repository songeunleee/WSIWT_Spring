import axios from "axios";

export async function signup(username, password) {
  const res = await axios
    .post("http://localhost:8080/auth/signup", {
      username,
      password,
    })
    .catch((res) => alert(res.response.data.error));

  return res.data;
}

export async function signin(username, password) {
  const res = await axios
    .post("http://localhost:8080/auth/signin", {
      username,
      password,
    })
    .catch((res) => {
      alert(res.response.data.error);
      return res.response.data.error;
    });

  return res.data;
}
