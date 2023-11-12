import React, { useEffect, useState } from "react";
import OotdCard from "../components/OotdCard";
import { HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getOOTDs } from "../api/database";
import useOotd from "../hooks/useOotd";
import Loading from "../components/Loading";
export default function OOTD() {
  const navigate = useNavigate();

  const {
    ootdQuery: { data: myOotd, isLoading },
  } = useOotd();

  const handleClick = () => {
    navigate("new");
  };
  console.log();
  return (
    <section className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="flex w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full"
      >
        NEW &nbsp; <HiPlusCircle />
      </button>
      {!isLoading ? (
        <div className="bg-color4 p-3">
          {myOotd
            .map((item) => <OotdCard ootd={item} key={item.id} />)
            .reverse()}
        </div>
      ) : (
        <div className=" flex justify-center w-full bg-color2  ">
          <Loading />
        </div>
      )}
    </section>
  );
}
