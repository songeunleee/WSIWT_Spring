import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="ㅈ-려ㅣㅣ bg-color1 text-white rounded-sm hover:brightness-110 p-2 px-4 text-grey"
    >
      {text}
    </button>
  );
}
