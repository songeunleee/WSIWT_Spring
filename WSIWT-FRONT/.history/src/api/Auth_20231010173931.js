import axios from "axios";
import { API_BASE_URL } from "../api-config";

export async function signup(username, password) {
  const res = await axios
    .post("http://localhost:8080/auth/signup", {
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

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Context-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };
}
