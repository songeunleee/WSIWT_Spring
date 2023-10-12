import axios from "axios";
import { API_BASE_URL } from "../api-config";

export async function signup(userDto) {
  console.log(userDto);
  return call("/auth/signup", "POST", userDto).then((res) => {
    return res.data;
  });
}

export async function signin(userDto) {
  return call("/auth/signin", "POST", userDto).then((res) => {
    if (res.data.token) {
      localStorage.setItem("ACCESS_TOKEN", res.data.token);
      localStorage.setItem("USER", res.data.username);
    }
    return res.data;
  });
}

export function signout() {
  localStorage.setItem("ACCESS_TOKEN", null);
  localStorage.removeItem("USER");
  window.location.href = "/";
}

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    options.data = request;
  }
  console.log(options);
  //console.log(options.headers.get("Authorization"));
  return axios(options.url, {
    options,
    headers: { Authorization: "Bearer " + accessToken },
  })
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
