import React from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { BsArrowReturnRight } from "react-icons/bs";
import { useAuthContext } from "../context/AuthContext";

export default function NestedComment({ content, parentAuthor }) {
  const { user } = useAuthContext();
  return (
    <section className="flex items-center  w-full gap-2 rounded p-1 px-3 bg-color1">
      <BsArrowReturnRight />
      <User user={{ photoURL: "images/coat.png", username: content.author }} />
      <div className="font-bold text-stone-700">@{parentAuthor}</div>
      <div className="font">{content}</div>
      <div className="flex gap-1.5">
        {user.username === comment.author && (
          <div className="flex gap-1.5">
            <button>
              <HiPencilSquare />
            </button>
            <button>
              <BsFillTrashFill />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
