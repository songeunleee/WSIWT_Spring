import axios from "axios";

export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

  const response = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data);

  return response.data.url;
}
