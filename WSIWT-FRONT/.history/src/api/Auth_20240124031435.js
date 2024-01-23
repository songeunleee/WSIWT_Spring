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
      localStorage.setItem("USER", JSON.stringify(res.data));
      console.log(res.data);
    }
    return res.data;
  });
}

export function signout() {
  localStorage.setItem("ACCESS_TOKEN", null);
  localStorage.removeItem("USER");
  window.location.href = "/";
}

export function socialLogin(provider) {
  window.location.href =
    API_BASE_URL +
    "/auth/authorize/" +
    provider +
    "?redirect_url=" +
    window.location.origin;
}

export function call(api, method, request) {
  let headers = { "Content-Type": "application/json" };

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    };
  }

  return axios(API_BASE_URL + api, {
    method: method,
    data: request,
    headers: headers,
  })
    .then((res) => {
      if (res.status === 200 || 201) {
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
