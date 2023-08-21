import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GiMonclerJacket, GiArmoredPants, GiLabCoat } from "react-icons/gi";

export default function Clothes({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("data/data.json");
    return res.json();
  });
  console.log(temperature);
  return (
    <div className="flex flex-1 justify-around text-5xl pl-3">
      <div>{console.log(getType(temperature))}</div>
      <GiLabCoat />
      <GiArmoredPants />
    </div>
  );
}

function getType(temperature) {
  if (temperature <= 4) {
    return 0;
  }
}
