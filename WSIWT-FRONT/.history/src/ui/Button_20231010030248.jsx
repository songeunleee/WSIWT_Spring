import React from "react";

export default function Button({ text, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={` bg-${color} text-white rounded-sm hover:brightness-110 p-2 px-4 text-grey`}
    >
      {text}
    </button>
  );
}