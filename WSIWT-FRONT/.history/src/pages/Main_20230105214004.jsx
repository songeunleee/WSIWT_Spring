import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
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
    <section className=" flex flex-col items-center h-full  ">
      <RegionInfo data={regionQuery.data} />

      {weatherQuery.isLoading ? (
        <div>looading</div>
      ) : (
        <Swiper
          hashNav={true}
          hashnavWatchState={true}
          freeMode={true}
          className="mt-5 flex items-center max-w-full rounded-md  bg-color2   "
          initialSlide={0}
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide data-hash={"slide1"}>
            <WeatherInfo
              data={weatherQuery.data}
              date={date}
              time={time}
              today
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherInfo
              data-hash={"slide2"}
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
      )}
    </section>
  );
}
