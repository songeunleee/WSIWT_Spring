import React, { useState } from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import Input from "./Input";

export default function Comment({ content }) {
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput((pre) => !pre);
  };
  return (
    <section className="border-b border-color1">
      <div
        onClick={handleClick}
        className="flex items-center  w-full gap-2 rounded p-1 px-3"
      >
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
      </div>
      <Input></Input>
    </section>
  );
}
