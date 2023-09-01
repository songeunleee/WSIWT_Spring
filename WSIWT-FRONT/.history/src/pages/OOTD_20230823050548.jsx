import React from "react";
import OotdCard from "../components/OotdCard";
import { BiCloset } from "react-icons/bi";
export default function OOTD() {
  return (
    <section className="flex flex-col items-center">
      <button className="flex w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full">
        &nbsp; 새 글 작성 &nbsp;
      </button>
      <div className="bg-color4 p-3">
        <OotdCard />
        <OotdCard />
      </div>
    </section>
  );
}