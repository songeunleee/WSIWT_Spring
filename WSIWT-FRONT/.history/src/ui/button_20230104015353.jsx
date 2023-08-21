import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-color1 text-white cursor-pointer rounded-sm hover:brightness-110 p-2 px-4 text-grey"
    >
      {text}
    </button>
  );
}
