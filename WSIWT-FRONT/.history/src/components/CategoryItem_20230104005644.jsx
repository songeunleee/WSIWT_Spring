import React, { useState } from "react";

export default function CategoryItem({ item, clickCategory }) {
  const [selected, setSlected] = useState(false);
  return (
    <div
      className="m-1 bg-color3 rounded-md cursor-pointer"
      onClick={() => {
        clickCategory(item.name);
        setSlected(true);
      }}
    >
      {item.display}
    </div>
  );
}
