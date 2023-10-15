import React from "react";
import Comment from "./Comment";

import Input from "./Input";
import { postComment } from "../api/database";
import { useAuthContext } from "../context/AuthContext";
import useCommnet from "../hooks/useCommnet";

export default function Comments({ ootdId, comments }) {
  const { user } = useAuthContext();
  const { addComment } = useCommnet();

  const handleClick = (input) => {
    // addComment.mutate({
    //   ootdId,
    //   commentSaveDto: { content: input, author: user.username },
    // });
  };
  console.log(comments);
  return (
    <div className="bg-color5 w-11/12 rounded-xl mt-4 pb-1">
      <Input onClick={handleClick} />
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
