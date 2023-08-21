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
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);
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
          style={{
            width: "335px",
            height: "170px",
            backgroundColor: "#FFF5F1",
            borderRadius: "12px",
          }}
          spaceBetween={8}
          initialSlide={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            {" "}
            <WeatherInfo
              data={weatherQuery.data}
              date={moment().format("YYYYMMDD")}
              time={moment().format("HH00")}
            />
          </SwiperSlide>
          <SwiperSlide>슬라이더2</SwiperSlide>
          <SwiperSlide>슬라이더3</SwiperSlide>
        </Swiper>
      </div>
      <RegionInfo data={regionQuery.data} />

      <Clothes />
    </section>
  );
}
