import React from "react";

export default function CategoryItem({ item, clickCategory }) {
  return (
    <div className="p-1 bg-color1" onClick={() => clickCategory(item.name)}>
      {item.display}
    </div>
  );
}
