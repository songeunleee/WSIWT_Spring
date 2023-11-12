import React from "react";

export default function Button({ visible, text, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={
        (visible && "invisible",
        `bg-${
          color ? color : "color1"
        } text-white rounded-sm hover:brightness-110 p-2 px-4 text-grey`)
      }
    >
      {text}
    </button>
  );
}
