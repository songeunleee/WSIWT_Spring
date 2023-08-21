import React from "react";

export default function CategoryItem({ item, clickCategory }) {
  return (
    <div className="flex flex-col">
      <div onClick={() => clickCategory(item.name)}>{item.display}</div>
    </div>
  );
}
