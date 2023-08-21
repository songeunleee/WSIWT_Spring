import React from "react";

export default function Button({ name }) {
  return (
    <button className="bg-color1 text-2xl text-white  p-2 px-4 text-grey">
      {name}
    </button>
  );
}
