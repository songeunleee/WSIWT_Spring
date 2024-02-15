import React from "react";

export default function Loading({ bgcolor, color }) {
  return (
    <div
      className={`m-5 w-44 h-44 rounded-full border-[5px] animate-spin border-t-${bgcolor} border-color4 `}
    ></div>
  );
}
