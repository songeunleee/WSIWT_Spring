import React from "react";
import { useLocation } from "react-router-dom";
import Closet from "../components/Closet";
import GeneralClothesDetail from "../components/GeneralClothesDetail";
import WeatherInfoDetail from "../components/WeatherInfoDetail";

export default function WeatherDetail() {
  const location = useLocation();
  const weatherInfo = location.state;

  const temp = weatherInfo.city ? weatherInfo.TEMP : weatherInfo[0].fcstValue;


  return (
    <section className="flex flex-col items-center mx-2">
      {<WeatherInfoDetail data={weatherInfo} />}
      <GeneralClothesDetail temperature={temp} />
      <div className="w-full py-2 hidden sm:block">
        <Closet temperature={temp} />
      </div>
    </section>
  );
}
