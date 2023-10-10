import axios from "axios";

export async function getOOTDs() {
  const res = await axios.get(`http://locahost:8080/api/v1/ootds`);
  console.log(res.data);
  return res.data;
}

export async function postOOTDs() {
  const res = await axios.psot(`http://locahost:8080/api/v1/ootd`, {
    content: "글내용",
    author: "작성자",
    url: "sdfsdf",
  });
  console.log(res.data);
  return res.data;
}
