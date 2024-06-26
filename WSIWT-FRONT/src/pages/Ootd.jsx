import React, { useRef, useState } from "react";
import OotdCard from "../components/OotdCard";
import { HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getMyOOTD, getOOTDs } from "../api/database";

import Loading from "../components/Loading";
import Button from "../ui/Button";
import { useQuery } from "@tanstack/react-query";
export default function OOTD({ myPage }) {
  const navigate = useNavigate();
  const target = useRef(null);
  const [page, setPage] = useState(0);

  const { data: myOotd, isLoading } = useQuery(
    ["myOotd", page],
    () => myPage ? getMyOOTD({ page }).then((res) => res.data) : getOOTDs({ page }).then((res) => res.data)
  );



  const handleClick = () => {
    navigate("new");
  };

  const handleNextPage = () => {
    setPage((pre) => pre + 1);
  };

  const handlePrePage = () => {
    setPage((pre) => pre - 1);
  };
  return (
    <section className="flex flex-col items-center w-full px-2 " ref={target}>
      {!myPage ? 
      <button
        onClick={handleClick}
        className="flex  w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full"
      >
        NEW &nbsp; <HiPlusCircle />
      </button> : <button
       
        className="flex  w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 my-4 rounded-full"
      >
        MY OOTD
      </button>}
      {!isLoading ? (
        <div className="flex flex-col w-full border border-color4 p-4 rounded-xl h-fit">
          {myOotd.content.length > 0 ? (
            myOotd.content.map((item) => <OotdCard ootd={item} key={item.id} />)
          ) : (
            <div className="flex flex-col justify-center items-center text-2xl font-bold rounded-xl bg-color3 p-6">
              피드가 없습니다.
            </div>
          )}
          <div className="flex justify-between">
            {myOotd && myOotd.page.hasPrevious ? (
              <Button text="◀" onClick={handlePrePage}></Button>
            ) : (
              <Button invisible text="◀"></Button>
            )}
            {myOotd && myOotd.page.hasNext && (
              <Button onClick={handleNextPage} text="▶"></Button>
            )}
          </div>
        </div>
      ) : (
        <div className=" flex justify-center w-full bg-color3  ">
          <Loading bordert="color2" border="color4" />
        </div>
      )}
    </section>
  );
}
