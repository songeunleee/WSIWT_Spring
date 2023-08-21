import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function RegionInfo({ data }) {
  return (
    <div className="flex items-center text-2xl font-bold">
      <MdLocationOn />
      {data}
    </div>
  );
}
