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
  console.log(userDto);
  return call("/auth/signin", "POST", userDto).then((res) => {
    console.log(res);
    alert(res.token);
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
    options.body = JSON.stringify(request);
  }

  return axios(options.url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
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
    });
}
