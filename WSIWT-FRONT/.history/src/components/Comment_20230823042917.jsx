import React, { useState } from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";

export default function Comment({ content }) {
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput((pre) => !pre);
  };
  return (
    <section
      onClick={handleClick}
      className="flex items-center border-b w-full border-color1 gap-2 rounded p-1 px-3"
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
      <Input></Input>
    </section>
  );
}
