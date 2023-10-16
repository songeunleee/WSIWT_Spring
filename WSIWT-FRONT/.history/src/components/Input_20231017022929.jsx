import React, { useRef, useState } from "react";
import { FaRegComment } from "react-icons/fa";
export default function Input({ nested, onClick, input }) {
  const inputRef = useRef();

  return (
    <div>
      <form className="flex bg-color2 rounded-xl m-2 w-auto" action="">
        {nested && (
          <div className="font-bold flex justify-center items-center mx-3">
            {input}
          </div>
        )}
        <input
          className="bg-transparent w-full outline-none p-2"
          ref={inputRef}
          defaultValue={input}
        />
        <button
          className="text-color1 text-2xl p-2"
          onClick={(e) => {
            e.preventDefault();
            onClick(inputRef.current.value);
            inputRef.current.value = "";
          }}
        >
          <FaRegComment />
        </button>
      </form>
    </div>
  );
}
