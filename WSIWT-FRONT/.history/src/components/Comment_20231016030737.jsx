import React, { useState } from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import Input from "./Input";
import NestedComment from "./NestedComment";
import { useAuthContext } from '../context/AuthContext';

export default function Comment({ comment }) {
  const {user} = useAuthContext();
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput((pre) => !pre);
  };
  return (
    <section className="border-b border-color1 rounded">
      <div
        onClick={handleClick}
        className="flex items-center  w-full gap-2  p-1 px-3"
      >
        <User user={{ picture: "images/coat.png", username: comment.author }} />
        <div className="font">{comment.content}</div>

       {user.username === comment.author &&  <div className="flex gap-1.5">
          <button>
            <HiPencilSquare />
          </button>
          <button>
            <BsFillTrashFill />
          </button>
        </div>
      </div>}
      {showInput && <Input />}
      <NestedComment content={"123456 입니다 ^^"} />
    </section>
  );
}
