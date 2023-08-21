import React from "react";
import { GiMonclerJacket, GiArmoredPants, GiLabCoat } from "react-icons/gi";

export default function Clothes() {
  return (
    <div className="flex text-3xl">
      <GiMonclerJacket />
      <GiLabCoat />
      <GiArmoredPants />
    </div>
  );
}
