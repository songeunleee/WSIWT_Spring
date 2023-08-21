import React, { useState } from "react";

export default function CategoryItem({ item, clickCategory }) {
  const [selected, setSlected] = useState(false);
  return (
    <div
      className={
        selected
          ? `m-1 bg-color4 rounded-md cursor-pointer`
          : `m-1 bg-color3 rounded-md cursor-pointer`
      }
      onClick={() => {
        clickCategory(item.name);
        setSlected(!selected);
      }}
    >
      {item.display}
    </div>
  );
}
