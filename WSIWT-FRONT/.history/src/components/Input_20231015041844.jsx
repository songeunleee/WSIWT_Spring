import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
export default function Input({ onClick }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className="flex bg-color2 rounded-xl m-2" action="">
        <input
          className="bg-transparent w-full outline-none p-2"
          onChange={handleChange}
        />
        <button
          className="text-color1 text-2xl p-2"
          onClick={() => {
            onClick(input);
          }}
        >
          <FaRegComment />
        </button>
      </form>
    </div>
  );
}
