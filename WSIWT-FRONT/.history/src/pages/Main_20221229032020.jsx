import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
import Clothes from "../components/Clothes";
import RegionInfo from "../components/RegionInfo";
import WeatherInfo from "../components/WeatherInfo";
import useCurrentLocation from "../hooks/useCurrentLocation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Scrollbar]);
export default function Main() {
  const { location } = useCurrentLocation();
  const weatherQuery = useQuery(["weather", location], () =>
    getVilageFcst(location.longitude, location.latitude)
  );
  const regionQuery = useQuery(["region", location], () =>
    getRegion(location.longitude, location.latitude)
  );

  const date = moment().format("YYYYMMDD");
  const time = moment().format("HHmm");

  // console.log(weatherQuery.data);
  return (
    <section className="flex flex-col items-center h-full  ">
      <RegionInfo data={regionQuery.data} />
      <div className="  h-[40rem] mt-3 rounded-md overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300  ">
        <Swiper
          className="flex items-center max-w-xs  bg-slate-200   "
          initialSlide={0}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="min-h-max">
            <WeatherInfo
              data={weatherQuery.data}
              date={date}
              time={time}
              today
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherInfo
              data={weatherQuery.data}
              date={moment().add(1, "days").format("YYYYMMDD")}
              time={time}
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherInfo
              data={weatherQuery.data}
              date={moment().add(2, "days").format("YYYYMMDD")}
              time={time}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
