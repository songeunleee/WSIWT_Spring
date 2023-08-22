import React from "react";
import Comment from "./Comment";
import { FaRegComment } from "react-icons/fa";

export default function Comments() {
  return (
    <div className="bg-color5 w-11/12 rounded-xl">
      <Comment content={"멋있다"} />
      <Comment content={"멋있엉"} />
    </div>
  );
}
