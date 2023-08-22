import React from "react";
import OotdCard from "../components/OotdCard";
import { BiCloset } from "react-icons/bi";
export default function OOTD() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-max justify-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full">
        <BiCloset />
        OOTD
      </div>
      <div className="bg-color4 p-3">
        <OotdCard />
        <OotdCard />
      </div>
    </section>
  );
}
