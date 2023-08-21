import React from "react";
import { useLocation } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

export default function ClosetItem({ item }) {
  const location = useLocation();
  const isMyCloset = location.pathname === "/mycloset" ? true : false;
  return (
    <section className="flex flex-col text-gray-800 bg-color2 rounded-3xl">
      <div className={`flex  items-center p-2 bg-color5 rounded-3xl  text-lg`}>
        <img
          className="w-14 h-14 p-2 bg-color1 rounded-2xl"
          src={item.image}
          alt={item.category}
        />
        <div className="flex flex-col px-2 justify-center">
          <p className="text-xs font-bold">{item.category}</p>
          <p className="  font-bold sm:text-[15px]  w-full truncate  ">
            {item.name}
          </p>
        </div>
        {isMyCloset && (
          <div className="flex-1 justify-self-start hover:ease-in duration-200 hover:scale-110 cursor-pointer">
            <TiDelete />
          </div>
        )}
      </div>
    </section>
  );
}
