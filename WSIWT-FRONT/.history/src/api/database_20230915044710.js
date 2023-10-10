import axios from "axios";

export async function getOOTDs() {
  const res = await axios.get(`ootds`);
  console.log(res.data);
  return res.data;
}

export async function postOOTDs() {
  console.log(1);
  const res = await axios.psot(`http://locahost:8080/api/v1/ootd`, {
    content: "글내용",
    author: "작성자",
    url: "sdfsdf",
  });
  return res.data;
}
