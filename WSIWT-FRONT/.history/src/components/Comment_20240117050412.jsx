import React, { Children, useState } from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { BsArrowReturnRight } from "react-icons/bs";
import Input from "./Input";
import NestedComment from "./NestedComment";
import { useAuthContext } from "../context/AuthContext";
import useOotd from "../hooks/useOotd";
import { updateComment } from "../api/database";
import { publishedAt } from "../util/getValue";

export default function Comment({ nested, comment, parentAuthor }) {
  const { user } = useAuthContext();
  const { removeComment, editComment, addNestedComment } = useOotd();
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
    editComment.mutate(
      {
        id: comment.id,
        commentUpdateDto: { content: input },
      },
      {
        onSuccess: () => {
          setEdit(false);
        },
      }
    );
  };

  const handleNestedCommentAdd = (input) => {
    user
      ? addNestedComment.mutate({
          ootdId: comment.ootdId,
          commentSaveDto: { content: input, author: user.username },
          id: comment.id,
        })
      : alert("로그인 후 이용해 주세요.");
  };

  return (
    <section className=" border-color ">
      <div
        className={`flex items-center justify-between w-full gap-2 py-1.5 p-1 px-3   ${
          nested && `bg-color1`
        }`}
      >
        {nested && <BsArrowReturnRight />}
        <User
          user={{
            picture: comment.author.picture,
            username: comment.author.username,
          }}
        />
        {nested && (
          <div className="font-bold text-stone-700">@{parentAuthor}</div>
        )}
        <div className="font flex-1" onClick={handleClick}>
          {!edit ? (
            comment.content
          ) : (
            <Input input={comment.content} onClick={handleSubmitUpdate} />
          )}
        </div>

        {user && user.username === comment.author.username && (
          <div className="flex gap-1.5">
            <button onClick={() => handleClickUpdate(comment.id)}>
              <HiPencilSquare />
            </button>
            <button onClick={() => handleClickDelete(comment.id)}>
              <BsFillTrashFill />
            </button>
            <div className="text-neutral-700 font-bold text-sm">
              {comment.createdAt === comment.updatedAt
                ? publishedAt(comment.createdAt, "")
                : publishedAt(comment.updatedAt, " (수정됨)")}
            </div>
          </div>
        )}
      </div>
      {showInput && (
        <Input
          nested={comment.author.username}
          onClick={handleNestedCommentAdd}
        />
      )}
      {comment.child.length > 0 &&
        comment.child.map((child) => (
          <Comment
            nested
            comment={child}
            key={child.id}
            parentAuthor={comment.author.username}
          />
        ))}
    </section>
  );
}
