import React from "react";

export default function CategoryItem({ item, clickCategory }) {
  return (
    <div className="flex">
      <div onClick={() => clickCategory(item.name)}>{item.display}</div>
    </div>
  );
}
