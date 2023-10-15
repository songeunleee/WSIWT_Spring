import React from "react";
import Comment from "./Comment";

import Input from "./Input";
import { postComment } from "../api/database";
import { useAuthContext } from "../context/AuthContext";

export default function Comments({ ootdId, comments }) {
  const { user } = useAuthContext();

  const handleClick = (input) => {
    postComment(ootdId, { content: input, author: user.name });
  };
  console.log(comments);
  return (
    <div className="bg-color5 w-11/12 rounded-xl mt-4 pb-1">
      <Input onClick={handleClick} />
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}
