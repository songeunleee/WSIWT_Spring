import React from "react";

export default function Button({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-color1 text-white rounded-sm hover:brightness-110 p-2 px-4 text-grey"
    >
      {text}
    </div>
  );
}
