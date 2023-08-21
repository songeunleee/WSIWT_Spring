import React from "react";
import { useLocation } from "react-router-dom";
import ClosetClothes from "../components/Closet";
import GeneralClothesDetail from "../components/GeneralClothesDetail";
import WeatherInfoDetail from "../components/WeatherInfoDetail";
import { useAuthContext } from "../context/AuthContext";

export default function WeatherDetail() {
  const { user } = useAuthContext();
  const location = useLocation();
  const weatherInfo = location.state;
  console.log(user);
  return (
    <section className="flex flex-col items-center mx-2">
      <WeatherInfoDetail data={weatherInfo} />
      <GeneralClothesDetail temperature={weatherInfo[0].fcstValue} />
      <div className="w-full py-2 hidden sm:block">
        <ClosetClothes temperature={weatherInfo[0].fcstValue} />
      </div>
    </section>
  );
}
