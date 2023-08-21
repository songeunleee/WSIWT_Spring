import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function ClothesDetailItem({ item }) {
  const [showDetail, setShowDetail] = useState(false);
  const handleClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <section className="flex flex-col text-gray-800">
      <div
        className={
          showDetail
            ? `flex  items-center p-2 bg-color3 rounded-3xl text-lg rounded-b-none`
            : `flex  items-center p-2 bg-color3 rounded-3xl  text-lg`
        }
      >
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
          <AiOutlineCaretDown />
        </div>
      </div>
      <div
        className={showDetail ? `bg-color3 rounded-b-3xl pb-2 px-2` : `hidden`}
      >
        <div className="p-2 rounded-3xl border-2 border-dashed border-color2">
          내 옷장에 옷을 추가해 보세요!
        </div>
      </div>
    </section>
  );
}
