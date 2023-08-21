import React from "react";
import { GiMonclerJacket, GiArmoredPants, GiLabCoat } from "react-icons/gi";

export default function Clothes() {
  return (
    <div className="flex flex-1 justify-between text-5xl p-1 ">
      <GiMonclerJacket />
      <GiLabCoat />
      <GiArmoredPants />
    </div>
  );
}
