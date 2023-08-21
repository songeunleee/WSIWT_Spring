import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getType } from "../util/getValue";

export default function ClothesDetail({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("data/data.json");
    return res.json();
  });

  console.log(data);
  return <div>{temperature}</div>;
}
