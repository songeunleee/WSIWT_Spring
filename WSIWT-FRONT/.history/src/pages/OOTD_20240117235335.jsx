import React, { useRef, useState } from "react";
import OotdCard from "../components/OotdCard";
import { HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getOOTDs } from "../api/database";

import Loading from "../components/Loading";
import Button from "../ui/Button";
import { useQuery } from "@tanstack/react-query";
export default function OOTD() {
  const navigate = useNavigate();
  const target = useRef(null);
  const [page, setPage] = useState(0);

  const { data: myOotd, isLoading } = useQuery(
    ["myOotd", page],
    () => getOOTDs({ page }).then((res) => res.data),
    {
      staleTime: 1000 * 60,
    }
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
    <section className="flex flex-col items-center" ref={target}>
      <button
        onClick={handleClick}
        className="flex w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full"
      >
        NEW &nbsp; <HiPlusCircle />
      </button>
      {!isLoading ? (
        <div className="flex flex-col bg-color4 p-3 ">
          {myOotd
            ? myOotd.content
                .map((item) => <OotdCard ootd={item} key={item.id} />)
                .reverse()
            : "피드가 없습니다."}
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
        <div className=" flex justify-center w-full bg-color2  ">
          <Loading />
        </div>
      )}
    </section>
  );
}
