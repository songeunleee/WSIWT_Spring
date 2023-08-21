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
  switch (temperature) {
    case temperature <== 4:
      return 0;
    case temperature >= 5 && temperature <= 8:
      return 1;
    case temperature >= 9 && temperature <= 11:
      return 2;
    case temperature >= 12 && temperature <= 16:
      return 3;
    case temperature >= 17 && temperature <= 19:
      return 4;
    case temperature >= 20 && temperature <= 22:
      return 5;
    case temperature >= 23 && temperature <= 27:
      return 6;
    case temperature >= 28:
      return 7;
  }
}
