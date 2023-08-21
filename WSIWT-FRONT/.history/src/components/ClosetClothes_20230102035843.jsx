import React from "react";

export default function ClosetClothes() {
  return (
    <div className={showDetail ? `bg-color2 rounded-b-3xl p-2` : `hidden`}>
      <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
        내 옷장에 옷을 추가해 보세요!
      </div>
    </div>
  );
}
