import React from "react";
import { useNavigate } from "react-router-dom";
import { time, weatherImg } from "../util/getValue";

import GeneralClothes from "./GeneralClothes";
export default function TimeWeather({ data }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/weatherdetail/${data[0].fcstDate}${data[0].fcstTime}`, {
      state: data,
    });
  };

  return (
    <section
      onClick={handleClick}
      className="flex border-t-2 border-r px-3 border-color2 py-2 items-center cursor-pointer hover:ease-in duration-200 hover:scale-102 overflow-x-auto hover:shadow-md"
    >
      <div className="  border-color2 items-center w-20 py-1 pt-2 ">
        <div className="  flex items-center justify-center ">
          <div className="w-6 mr-2">
            {weatherImg(
              data[0].fcstTime,
              parseInt(data[2].fcstValue),

              parseInt(data[3].fcstValue)
            )}
          </div>
          <div className="ml-1 font-bold">{data[0].fcstValue}℃</div>
        </div>
        <div className="flex justify-center pt-2 text-sm text-stone-800 font-bold">
          {time(data[0].fcstTime)}
        </div>
      </div>
      <GeneralClothes temperature={data[0].fcstValue} />
    </section>
  );
}
