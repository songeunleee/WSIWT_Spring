import React from "react";
import { getType } from "../util/getValue";

export default function ClothesDetail({ temperature }) {
  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));
  return <div>{temperature}</div>;
}
