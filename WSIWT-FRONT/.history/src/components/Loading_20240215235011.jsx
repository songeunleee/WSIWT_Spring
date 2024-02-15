import React from "react";

export default function Loading({ bordert, boder }) {
  return (
    <div
      className={`m-5 w-44 h-44 rounded-full border-[5px] animate-spin border-t-${bordert} border-${boder} `}
    ></div>
  );
}
