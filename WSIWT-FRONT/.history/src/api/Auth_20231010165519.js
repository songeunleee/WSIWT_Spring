import axios from "axios";

export async function signup(username, password) {
  const res = await axios
    .post("http://localhost:8080/auth/signup", {
      username,
      password,
    })
    .then((res) => {
      res.data;
    })
    .catch((res) => {
      return res.response.data;
    });

  return res;
}

export async function signin(username, password) {
  const res = await axios
    .post("http://localhost:8080/auth/signin", {
      username,
      password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      return res.response.data;
    });

  return res;
}
