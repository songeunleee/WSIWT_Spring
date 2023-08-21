import React from "react";
import Button from "../ui/Button";

export default function ClosetClothes({ category }) {
  return (
    <div className=" bg-color2 rounded-3xl p-2">
      <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
        <Button text={"로그인"} /> 후 내 옷장에 옷을 추가해 보세요!
        <div>{category && category}</div>
      </div>
    </div>
  );
}
