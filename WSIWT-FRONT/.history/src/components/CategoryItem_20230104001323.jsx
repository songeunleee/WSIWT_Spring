import React from "react";

export default function CategoryItem() {
  return (
    <div>
      <div key={item.name} onClick={() => ClickMain(item.name)}>
        {item.display}
      </div>
    </div>
  );
}
