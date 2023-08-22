import React from "react";
import OotdCard from "../components/OotdCard";
import { HiPlusCircle } from "react-icons/hi";
export default function OOTD() {
  return (
    <section className="flex flex-col items-center">
      <button className="flex w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full">
        NEW &nbsp; <HiPlusCircle />
      </button>
      <div className="bg-color4 p-3">
        <OotdCard />
        <OotdCard />
      </div>
    </section>
  );
}
