import React, { useState } from "react";

export default function CategoryItem({ item, clickCategory, value }) {
  const [selected, setSlected] = useState(false);

  value === item.name ? setSlected(true) : setSlected(false);
  return (
    <div
      className={
        selected
          ? `m-1 bg-color4 rounded-md cursor-pointer`
          : `m-1 bg-color3 rounded-md cursor-pointer`
      }
      onClick={() => {
        clickCategory(item.name);
      }}
    >
      {item.display}
    </div>
  );
}
