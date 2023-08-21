import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import ClosetClothes from "./ClosetClothes";

export default function ClothesDetailItem({ item }) {
  const [showDetail, setShowDetail] = useState(false);
  const [category, setCategory] = useState("");
  const handleClick = () => {
    setShowDetail(!showDetail);
    setCategory(item.category);
  };

  const resizingHandler = () => {
    if (window.innerWidth >= 640) {
      setShowDetail(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);
  return (
    <section className="flex flex-col text-gray-800 bg-color2 rounded-3xl">
      <div className={`flex  items-center p-2 bg-color3 rounded-3xl  text-lg`}>
        <img
          className="w-14 h-14 p-2 bg-color4 rounded-2xl"
          src={item.image}
          alt={item.category}
        />
        <p className="px-4  font-bold  w-full truncate  ">{item.category}</p>
        <div
          onClick={handleClick}
          className="
          visible sm:invisible md:invisible pr-2 cursor-pointer hover:ease-in duration-200 hover:scale-125"
        >
          {showDetail ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      </div>
      {showDetail && <ClosetClothes category={category} />}
    </section>
  );
}
