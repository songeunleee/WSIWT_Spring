import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
import Clothes from "../components/Clothes";
import RegionInfo from "../components/RegionInfo";
import WeatherInfo from "../components/WeatherInfo";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Main() {
  SwiperCore.use([Navigation, Pagination]);
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
