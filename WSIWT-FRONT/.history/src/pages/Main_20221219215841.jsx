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
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);
export default function Main() {
  const { location } = useCurrentLocation();
  const weatherQuery = useQuery(["weather", location], () =>
    getVilageFcst(location.longitude, location.latitude)
  );
  const regionQuery = useQuery(["region", location], () =>
    getRegion(location.longitude, location.latitude)
  );

  const date = moment().format("YYYYMMDD");
  const time = moment().format("HH00");

  return (
    <section className="flex flex-col items-center">
      <RegionInfo data={regionQuery.data} />
      <div>
        <Swiper
          className="flex items-center max-w-xs bg-slate-200 rounded-md"
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="p-2">
            <WeatherInfo data={weatherQuery.data} date={date} time={time} />
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <WeatherInfo
              data={weatherQuery.data}
              date={moment().add(1, "days").format("YYYYMMDD")}
            />
          </SwiperSlide>
          <SwiperSlide className="p-2">
            <WeatherInfo
              data={weatherQuery.data}
              date={moment().add(2, "days").format("YYYYMMDD")}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <Clothes />
    </section>
  );
}
