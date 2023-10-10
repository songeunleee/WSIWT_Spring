import axios from "axios";

export async function getOOTDs() {
  const res = await axios.get(`http://localhost:8080/ootds`);
  console.log(res.data);
  return res.data;
}

export function postOOTDs() {
  console.log(1);
  axios
    .post(`http://localhost:8080/api/v1/ootd`, {
      content: "글내용",
      author: "작성자",
      url: "sdfsdf",
    })
    .then((res) => {
      console.log(res);
    });
}
