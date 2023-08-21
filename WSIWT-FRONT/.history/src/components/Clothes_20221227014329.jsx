import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GiMonclerJacket, GiArmoredPants, GiLabCoat } from "react-icons/gi";

export default function Clothes({ temperature }) {
  const { data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json;
  });

  return (
    <div className="flex flex-1 justify-around text-5xl pl-3">
      <GiMonclerJacket />
      <GiLabCoat />
      <GiArmoredPants />
    </div>
  );
}
