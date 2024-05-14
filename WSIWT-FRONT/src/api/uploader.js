import { call } from "./Auth";


export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);

  const response = await call("/image","POST",data,true);
  
  return response.data.url.replace('http://', 'https://');
}
