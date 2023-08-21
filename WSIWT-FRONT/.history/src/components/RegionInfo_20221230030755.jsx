import React from "react";
import { IoLocationSharp } from "react-icons/io";

export default function RegionInfo({ data }) {
  return (
    <div className="text-xl font-bold">
      <IoLocationSharp />
      {data}
    </div>
  );
}
