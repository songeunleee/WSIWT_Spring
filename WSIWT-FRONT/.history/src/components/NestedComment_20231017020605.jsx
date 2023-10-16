import React from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { BsArrowReturnRight } from "react-icons/bs";

export default function NestedComment({ content, parentAuthor }) {
  return (
    <section className="flex items-center  w-full gap-2 rounded p-1 px-3 bg-color1">
      <BsArrowReturnRight />
      <User user={{ photoURL: "images/coat.png", username: "이송은" }} />
      <div className="font-bold text-neutral-900">@{parentAuthor}</div>
      <div className="font">{content}</div>
      <div className="flex gap-1.5">
        <button>
          <HiPencilSquare />
        </button>
        <button>
          <BsFillTrashFill />
        </button>
      </div>
    </section>
  );
}
