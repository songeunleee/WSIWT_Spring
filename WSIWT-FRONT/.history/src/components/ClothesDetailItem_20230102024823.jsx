import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center p-2 bg-color3 rounded-3xl text-gray-800 text-lg">
      <img
        className="w-14 h-14 p-2 bg-color4 rounded-2xl"
        src={item.image}
        alt={item.name}
      />
      <p className="px-4  font-bold  xs:text-base sm:text-base w-full truncate ...  ">
        {item.name}
      </p>
      <div className="visible sm:invisible md:invisible">
        <AiOutlineCaretDown />
      </div>
    </section>
  );
}
