import React from "react";
import User from "./User";
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa5";

export default function Comment({ content }) {
  return (
    <section className="flex items-center border-b border-color1 gap-2 rounded p-1 px-3">
      <User user={{ photoURL: "images/coat.png", displayName: "이송은" }} />
      <div className="font">{content}</div>
      <button>
        <HiPencilSquare />
      </button>
      <button>
        <FaTrashCan />
      </button>
    </section>
  );
}
