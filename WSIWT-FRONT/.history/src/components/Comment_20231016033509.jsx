import React, { useState } from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import Input from "./Input";
import NestedComment from "./NestedComment";
import { useAuthContext } from "../context/AuthContext";
import useOotd from "../hooks/useOotd";

export default function Comment({ comment }) {
  const { user } = useAuthContext();
  const { removeComment, editComment } = useOotd();
  const [showInput, setShowInput] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleClick = () => {
    !edit && setShowInput((pre) => !pre);
  };

  const handleClickDelete = (id) => {
    removeComment.mutate(id);
  };

  const handleClickUpdate = () => {
    setEdit((pre) => !pre);
  };

  const handleSubmitUpdate = (input) => {
    editComment.mutate({
      id: comment.id,
      commentUpdateDto: { content: input },
    });
  };
  return (
    <section className="border-b border-color1 rounded ">
      <div className="flex items-center justify-between w-full gap-2  p-1 px-3">
        <User user={{ picture: "images/coat.png", username: comment.author }} />
        <div className="font flex-1" onClick={handleClick}>
          {!edit ? (
            comment.content
          ) : (
            <Input input={comment.content} onClick={handleSubmitUpdate} />
          )}
        </div>

        {user.username === comment.author && (
          <div className="flex gap-1.5">
            <button onClick={() => handleClickUpdate(comment.id)}>
              <HiPencilSquare />
            </button>
            <button onClick={() => handleClickDelete(comment.id)}>
              <BsFillTrashFill />
            </button>
          </div>
        )}
      </div>
      {showInput && <Input />}
      <NestedComment content={"123456 입니다 ^^"} />
    </section>
  );
}
