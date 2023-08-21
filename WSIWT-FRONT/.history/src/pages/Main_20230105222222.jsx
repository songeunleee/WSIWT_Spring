import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { Children } from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
import RegionInfo from "../components/RegionInfo";
import WeatherInfo from "../components/WeatherInfo";
import useCurrentLocation from "../hooks/useCurrentLocation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar, HashNavigation } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
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
          hashNavigation={{
            watchState: true,
          }}
          className="mt-5 flex items-center max-w-full rounded-md  bg-color2   "
          initialSlide={0}
          autoHeight={true}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, HashNavigation]}
        >
          <SwiperSlide>
            <WeatherInfo
              data={weatherQuery.data}
              date={date}
              time={time}
              today
            />
          </SwiperSlide>
          <SwiperSlide data-hash="tommorow">
            <WeatherInfo
              data={weatherQuery.data}
              date={moment().add(1, "days").format("YYYYMMDD")}
              time={time}
            />
          </SwiperSlide>
          <SwiperSlide data-hash="Day after tomorrow">
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
