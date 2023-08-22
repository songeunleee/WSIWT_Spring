import React from "react";
import Comment from "./Comment";
import { FaRegComment } from "react-icons/fa";

export default function Comments() {
  return (
    <div className="bg-color5 w-11/12 rounded-xl mt-4">
      <form className="flex bg-color2 rounded-xl m-2" action="">
        <input className="bg-transparent w-full outline-none p-2" />
        <button className="text-color1 text-2xl p-2">
          <FaRegComment />
        </button>
      </form>
      <Comment content={"멋있다"} />
      <Comment content={"멋있엉"} />
    </div>
  );
}
