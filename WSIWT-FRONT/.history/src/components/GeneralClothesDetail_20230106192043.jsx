import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getType } from "../util/getValue";
import GeneralClothesDetailItem from "./GeneralClothesDetailItem";

export default function GeneralClothesDetail({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json();
  });
  const clothesList =
    data && data.items.filter((item) => item.type.includes(4));
  console.log(data);
  return (
    <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2 px-2">
      {clothesList &&
        clothesList.map((item) => (
          <GeneralClothesDetailItem key={item.category} item={item} />
        ))}
    </ul>
  );
}
