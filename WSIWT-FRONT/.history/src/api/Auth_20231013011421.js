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

export async function signin(userDto) {
  return call("/auth/signin", "POST", userDto).then((res) => {
    return res.data;
  });
}

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    options.data = request;
  }

  return axios(options)
    .then((res) => {
      if (res.status === 200) {
        return res;
      } else if (res.status === 403) {
        window.location.href("/login");
      } else {
        Promise.reject(res);
        throw Error(res);
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
      return error.response;
    });
}
