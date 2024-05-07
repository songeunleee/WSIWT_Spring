import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import usePublic from "../hooks/usePublic";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { usePlaceContext } from "../context/PlaceContext";
import { useNavigate, useParams } from "react-router-dom";

export default function RegionInfo() {
  const [show, setShow] = useState(false);
  const { place, setPlace, returnCurrentLocation } = usePlaceContext();
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    setShow((pre) => !pre);
  };
  const handleClickPlace = (item) => {
    setShow((pre) => !pre);
    navigate(`/${item}`);
  };
  const handleClickPin = () => {
    setShow(false);
    returnCurrentLocation();
    navigate("/");
  };

  const { placeList } = usePublic();
  return (
    <section className="relative">
      <div
        className={
          show
            ? `flex items-center text-lg font-bold bg-color1 p-2 px-4 pr-5  rounded-t-3xl `
            : `flex items-center text-lg font-bold bg-color1 p-2 px-4 pr-5 rounded-full`
        }
      >
        <div className="cursor-pointer hover:ease-in duration-200 hover:scale-125" onClick={handleClickPin}>
          <MdLocationOn />
        </div>
        &nbsp;
        {params.place == undefined ? place : params.place}
        <div
          onClick={handleClick}
          className="
            cursor-pointer hover:ease-in duration-200 hover:scale-125"
        >
          {show ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      </div>
      <div>
        {show && (
          <div className="border-r border-b border-l h-96  border-color2 rounded-b-lg bg-white overflow-x-hidden overflow-y-none scrollbar-none z-20 absolute w-full">
            {placeList &&
              placeList.map((item) => (
                <div
                  key={item.AREA_NM}
                  onClick={() => handleClickPlace(item.AREA_NM)}
                  className="p-3 font-bold border-b cursor-pointer hover:ease-in duration-200 hover:scale-102  hover:shadow-md"
                >
                  {item.AREA_NM}
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
