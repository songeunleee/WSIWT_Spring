import React from "react";
import Comment from "./Comment";

import Input from "./Input";
import { postComment } from "../api/database";
import { useAuthContext } from "../context/AuthContext";

export default function Comments({ comments }) {
  const { user } = useAuthContext();

  const handleClick = (input) => {
    postComment(comment.ootd.id, { content: input, author: user.name });
  };
  console.log(user);
  return (
    <div className="bg-color5 w-11/12 rounded-xl mt-4 pb-1">
      <Input onClick={handleClick} />
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}
