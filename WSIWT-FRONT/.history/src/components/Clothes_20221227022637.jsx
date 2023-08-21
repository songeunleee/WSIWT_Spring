import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GiMonclerJacket, GiArmoredPants, GiLabCoat } from "react-icons/gi";

export default function Clothes({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("data/data.json");
    return res.json();
  });
  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));
  console.log();
  return (
    <div className="flex flex-1 justify-around  pl-3">
      <img
        className="w-10 h-10"
        src={clothesList && clothesList[0].image}
        alt=""
      />
      <img
        className="w-100 h-100"
        src={clothesList && clothesList[1].image}
        alt=""
      />
      <img
        className="w-100 h-100"
        src={clothesList && clothesList[2].image}
        alt=""
      />
    </div>
  );
}

function getType(temperature) {
  if (temperature <= 4) {
    return 0;
  } else if (temperature >= 5 && temperature <= 8) {
    return 1;
  } else if (temperature >= 9 && temperature <= 11) {
    return 2;
  } else if (temperature >= 12 && temperature <= 16) {
    return 3;
  } else if (temperature >= 17 && temperature <= 19) {
    return 4;
  } else if (temperature >= 20 && temperature <= 22) {
    return 5;
  } else if (temperature >= 23 && temperature <= 27) {
    return 6;
  } else if (temperature >= 28) {
    return 7;
  }
}
