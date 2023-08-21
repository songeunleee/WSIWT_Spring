import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import ClosetClothes from "./ClosetClothes";

export default function ClothesDetailItem({ item }) {
  const [showDetail, setShowDetail] = useState(false);
  const [category, setCategory] = useState("");
  const handleClick = () => {
    setShowDetail(!showDetail);
    setCategory(item.name);
  };
  return (
    <section className="flex flex-col text-gray-800 bg-color2 rounded-3xl">
      <div className={`flex  items-center p-2 bg-color3 rounded-3xl  text-lg`}>
        <img
          className="w-14 h-14 p-2 bg-color4 rounded-2xl"
          src={item.image}
          alt={item.name}
        />
        <p className="px-4  font-bold  xs:text-base sm:text-base w-full truncate ...  ">
          {item.name}
        </p>
        <div
          onClick={handleClick}
          className="
          visible sm:invisible md:invisible pr-2 cursor-pointer hover:ease-in duration-200 hover:scale-125"
        >
          {showDetail ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      </div>
      <div className={showDetail && ` w-full bg-color2 rounded-3xl p-2`}>
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          내 옷장에 옷을 추가해 보세요!
          <div>{category && category}</div>
        </div>
      </div>
    </section>
  );
}
