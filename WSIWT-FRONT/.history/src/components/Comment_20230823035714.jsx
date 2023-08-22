import React from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";

export default function Comment({ content }) {
  return (
    <section className="flex justify-items-end border-b  border-color1 gap-2 rounded p-1 px-3">
      <User user={{ photoURL: "images/coat.png", displayName: "이송은" }} />
      <div className="font">{content}</div>

      <div className="flex">
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
