import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getType } from "../util/getValue";
import ClothesDetailItem from "./ClothesDetailItem";

export default function ClothesDetail({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json();
  });
  const clothesList =
    data && data.items.filter((item) => item.type.includes(7));
  console.log(data);
  return (
    <ul className=" grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 w-full gap-2">
      {clothesList &&
        clothesList.map((item) => (
          <ClothesDetailItem key={item.name} item={item} />
        ))}
    </ul>
  );
}
