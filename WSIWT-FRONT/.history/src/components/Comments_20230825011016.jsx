import React from "react";
import Comment from "./Comment";

import Input from "./Input";

export default function Comments() {
  return (
    <div className="bg-color5 w-11/12 rounded-xl mt-4 pb-1">
      <Input />
      <Comment
        content={
          "안녕하세요 스타일이 제법이시네요 인스타그램 아이디 알 수 있을까요ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㄴㅇㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄷㄴㄹㅇ"
        }
      />
      <Comment content={"멋있엉"} />
    </div>
  );
}
