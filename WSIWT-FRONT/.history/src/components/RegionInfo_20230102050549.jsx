import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function RegionInfo({ data }) {
  return (
    <div className="flex items-center text-xl font-bold bg-color2 p-2">
      <MdLocationOn />
      &nbsp;
      {data}
    </div>
  );
}
