import React from "react";
import { ImLocation } from "react-icons/im";

export default function RegionInfo({ data }) {
  return (
    <div className="flex text-xl font-bold">
      <ImLocation />
      {data}
    </div>
  );
}
