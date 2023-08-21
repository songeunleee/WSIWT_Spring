import axios from "axios";

export async function uploadImage(file) {
  console.log(file);
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  return axios(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
