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

  if (request) {
    options.body = request;
  }

  return axios(options.url, options)
    .then((res) => {
      if (res.status === 200) {
        return res;
      } else if (res.status === 403) {
        window.location.href("/login");
      } else {
        Promise.reject(res);
        throw Error(response);
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}
