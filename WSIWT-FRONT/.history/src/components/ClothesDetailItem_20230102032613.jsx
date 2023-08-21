import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function ClothesDetailItem({ item }) {
  const handleClick = () => {};
  return (
    <section className="flex flex items-center p-2 bg-color3 rounded-3xl text-gray-800 text-lg">
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
        className="visible sm:invisible md:invisible pr-2 cursor-pointer hover:ease-in duration-200 hover:scale-125"
      >
        <AiOutlineCaretDown />
      </div>
      <div>
        <div>내 옷장에 옷을 추가해 보세요!</div>
      </div>
    </section>
  );
}
