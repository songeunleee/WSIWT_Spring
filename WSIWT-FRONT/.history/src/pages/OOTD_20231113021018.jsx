import React, { useRef, useState } from "react";
import OotdCard from "../components/OotdCard";
import { HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getOOTDs } from "../api/database";
import useOotd from "../hooks/useOotd";
import Loading from "../components/Loading";
import Button from "../ui/Button";
export default function OOTD() {
  const navigate = useNavigate();
  const target = useRef(null);
  const [page, setPage] = useState(0);

  const {
    ootdQuery: { data: myOotd, isLoading },
  } = useOotd({ page });
  const { nextPage } = useOotd();
  const handleClick = () => {
    navigate("new");
  };

  const handleNextPage = () => {
    setPage((pre) => {
      nextPage.mutate({ page: pre + 1 }, { onSuccess: console.log(1) });
    });
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
          {myOotd &&
            myOotd.content
              .map((item) => <OotdCard ootd={item} key={item.id} />)
              .reverse()}
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
