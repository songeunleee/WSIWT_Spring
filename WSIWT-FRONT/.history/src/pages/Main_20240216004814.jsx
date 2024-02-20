import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
import RegionInfo from "../components/RegionInfo";
import WeatherInfo from "../components/WeatherInfo";
import useCurrentLocation from "../hooks/useCurrentLocation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, HashNavigation } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const { location } = useCurrentLocation();
  const navigate = useNavigate();
  const weatherQuery = useQuery(["weather", location], () =>
    getVilageFcst(location.longitude, location.latitude)
  );
  const regionQuery = useQuery(["region", location], () =>
    getRegion(location.longitude, location.latitude)
  );

  const date = moment().format("YYYYMMDD");
  const time = moment().format("HHmm");

  const handleClick = () => {
    navigate("/ootd");
  };

  return (
    <section className=" flex flex-col items-center h-full  mx-2">
      <div className="flex items-center justify-center">
        <RegionInfo data={regionQuery.data} />
        <button
          onClick={handleClick}
          className="flex w-max justify-center text-xl font-bold bg-color4 py-2 px-4 ml-5 rounded-full"
        >
          OOTD
        </button>
      </div>
      {weatherQuery.isLoading ? (
        <div className="mt-5 flex justify-center w-full rounded-md  bg-color2  ">
          <Loading bordert={"color1"} border={"color5"} />
        </div>
      ) : (
        <Swiper
          hashNavigation={{
            watchState: true,
          }}
          className="mt-5 flex items-center max-w-full rounded-lg border border-color5"
          initialSlide={0}
          autoHeight={true}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, HashNavigation]}
        >
          <SwiperSlide data-hash="today">
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
          <SwiperSlide data-hash="DayAfterTomorrow">
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
