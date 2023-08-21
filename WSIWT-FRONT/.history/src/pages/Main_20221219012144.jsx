import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
import Clothes from "../components/Clothes";
import RegionInfo from "../components/RegionInfo";
import WeatherInfo from "../components/WeatherInfo";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination]);

import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Main() {
  const { location } = useCurrentLocation();
  const weatherQuery = useQuery(["weather", location], () =>
    getVilageFcst(location.longitude, location.latitude)
  );
  const regionQuery = useQuery(["region", location], () =>
    getRegion(location.longitude, location.latitude)
  );

  return (
    <section className="flex flex-col items-center">
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <RegionInfo data={regionQuery.data} />

      <WeatherInfo
        data={weatherQuery.data}
        date={moment().format("YYYYMMDD")}
        time={moment().format("HH00")}
      />
      <Clothes />
    </section>
  );
}
