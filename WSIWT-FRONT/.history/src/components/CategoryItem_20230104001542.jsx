import React from "react";

export default function CategoryItem({ item, clickCategory }) {
  return (
    <div>
      <div onClick={() => clickCategory(item.name)}>{item.display}</div>
    </div>
  );
}
