import React from "react";
import Closet from "../components/Closet";
import Ootd from "../pages/Ootd"

export default function MyCloset() {
  return (
    <div className="px-2">
      <Closet />

      <Ootd myPage />
    </div>
  );
}
