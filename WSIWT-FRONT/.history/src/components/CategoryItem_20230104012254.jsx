import React, { useEffect, useState } from "react";

export default function CategoryItem({ item, clickCategory, value }) {
  const [selected, setSlected] = useState(false);
  useEffect(() => {
    value === item.name ? setSlected(true) : setSlected(false);
    /none/d.test(value) && setSlected(false);
  }, [value]);

  console.log(value);

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
      {item.display === null ? "항목이 없음" : item.display}
    </div>
  );
}
