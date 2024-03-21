import axios from "axios";
import { call } from "./Auth";
import { API_BASE_URL } from "../api-config";

export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  console.log(data);

  const response = await call("/image","POST",data,true);
  
  console.log(response.data.url);

  return response.data.url;
}
