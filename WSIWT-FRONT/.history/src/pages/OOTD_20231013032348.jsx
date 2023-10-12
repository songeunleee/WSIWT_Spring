import React, { useEffect } from "react";
import OotdCard from "../components/OotdCard";
import { HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getOOTDs } from "../api/database";
export default function OOTD() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("new");
  };
  useEffect(() => {
    getOOTDs().then(console.log;
  });

  return (
    <section className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="flex w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full"
      >
        NEW &nbsp; <HiPlusCircle />
      </button>
      <div className="bg-color4 p-3">
        <OotdCard />
        <OotdCard />
      </div>
    </section>
  );
}
