import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GiMonclerJacket, GiArmoredPants, GiLabCoat } from "react-icons/gi";
import { getType } from "../util/getValue";

export default function Clothes({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("data/data.json");
    return res.json();
  });
  const clothesList =
    data && data.items.filter((item) => item.type.includes(getType(1)));

  return (
    <div className="flex flex-1 justify-around  pl-3">
      <img
        className="w-12 h-12"
        src={clothesList && clothesList[0].image}
        alt={clothesList && clothesList[0].name}
      />
      <img
        className="w-12 h-12"
        src={clothesList && clothesList[1].image}
        alt={clothesList && clothesList[1].name}
      />
      <img
        className="w-12 h-12"
        src={clothesList && clothesList[2].image}
        alt={clothesList && clothesList[2].name}
      />
    </div>
  );
}
