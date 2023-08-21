import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getType } from "../util/getValue";

export default function ClothesDetail({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothe"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json();
  });
  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));
  console.log(data);
  return <div>{temperature}</div>;
}
