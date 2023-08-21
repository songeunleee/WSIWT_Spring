import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";
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
    <>
      <RegionInfo />
      <WeatherInfo data={weatherQuery.data} />
    </>
  );
}
