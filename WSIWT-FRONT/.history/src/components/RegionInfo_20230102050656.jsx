import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function RegionInfo({ data }) {
  return (
    <div className="flex items-center text-xl font-bold bg-color3 p-2 px-4 pr-5 rounded-full">
      <MdLocationOn />
      &nbsp;
      {data}
    </div>
  );
}
