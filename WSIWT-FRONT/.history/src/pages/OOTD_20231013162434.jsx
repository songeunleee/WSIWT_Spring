import React, { useEffect, useState } from "react";
import OotdCard from "../components/OotdCard";
import { HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getOOTDs } from "../api/database";
export default function OOTD() {
  const [ootds, setOotds] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("new");
  };
  useEffect(() => {
    getOOTDs().then((res) => setOotds(res.data));
  }, []);

  const handledelete = (id) => {
    setOotds((pre) => pre.filter((item) => item !== id));
  };

  return (
    <section className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="flex w-max justify-center items-center text-xl font-bold bg-color4 p-2 px-4 mb-4 rounded-full"
      >
        NEW &nbsp; <HiPlusCircle />
      </button>
      <div className="bg-color4 p-3">
        {ootds.map((item) => (
          <OotdCard ootd={item} key={item.id} onDelete={handledelete} />
        ))}
      </div>
    </section>
  );
}
