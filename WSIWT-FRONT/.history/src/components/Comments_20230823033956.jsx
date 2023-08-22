import React from "react";
import Comment from "./Comment";
import { FaRegComment } from "react-icons/fa";

export default function Comments() {
  return (
    <div className="bg-color5 w-11/12 rounded-xl mt-4 pb-1">
      <form className="flex bg-color2 rounded-xl m-2" action="">
        <input className="bg-transparent w-full outline-none p-2" />
        <button className="text-color1 text-2xl p-2">
          <FaRegComment />
        </button>
      </form>
      <Comment
        content={
          "안녕하세요 스타일이 제법이시네요 인스타그램 아이디 알 수 있을까요ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㄴㅇㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄷㄴㄹㅇ"
        }
      />
      <Comment content={"멋있엉"} />
    </div>
  );
}
