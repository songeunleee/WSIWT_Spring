import React from "react";
import Comment from "./Comment";

import Input from "./Input";

export default function Comments({ comment }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(1);
  };
  return (
    <div className="bg-color5 w-11/12 rounded-xl mt-4 pb-1">
      <Input onClick={handleClick} />
      <Comment comment={comment} />
    </div>
  );
}
