import React from "react";
import { FaRegComment } from "react-icons/fa";
export default function Input() {
  return (
    <div>
      <form className="flex bg-color2 rounded-xl m-2" action="">
        <input className="bg-transparent w-full outline-none p-2" />
        <button className="text-color1 text-2xl p-2">
          <FaRegComment />
        </button>
      </form>
    </div>
  );
}
