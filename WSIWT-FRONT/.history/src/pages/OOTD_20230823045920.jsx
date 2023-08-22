import React from "react";
import OotdCard from "../components/OotdCard";

export default function OOTD() {
  return (
    <section>
      <div className="flex items-center text-xl font-bold bg-color1 p-2 px-4 pr-5 rounded-full">
        OOTD
      </div>
      <div className="bg-color4 p-3">
        <OotdCard />
        <OotdCard />
      </div>
    </section>
  );
}
