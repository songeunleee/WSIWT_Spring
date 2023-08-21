import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function RegionInfo({ data }) {
  return (
    <div className="flex items-center text-xl font-bold bg-color1 p-2 px-4 pr-5 rounded-full">
      📍 &nbsp;
      {data}
    </div>
  );
}
