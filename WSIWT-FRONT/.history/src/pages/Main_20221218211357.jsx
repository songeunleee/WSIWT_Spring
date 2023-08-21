import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
import Clothes from "../components/Clothes";
import RegionInfo from "../components/RegionInfo";
import WeatherInfo from "../components/WeatherInfo";

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
      <RegionInfo data={regionQuery.data} />
      <WeatherInfo data={weatherQuery.data} />
      <Clothes />
    </section>
  );
}
