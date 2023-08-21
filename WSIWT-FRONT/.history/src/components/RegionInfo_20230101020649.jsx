import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function RegionInfo({ data }) {
  return (
    <div className="flex items-center text-xl font-bold">
      <MdLocationOn />
      {data}
    </div>
  );
}
