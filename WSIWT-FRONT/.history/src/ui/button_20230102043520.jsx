import React from "react";

export default function Button({ text }) {
  return (
    <button className="bg-color1 text-2xl text-white rounded-sm hover:brightness-110 p-2 px-4 text-grey">
      {text}
    </button>
  );
}
