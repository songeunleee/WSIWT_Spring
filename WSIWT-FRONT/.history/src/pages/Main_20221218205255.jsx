import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";

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
      <div>{regionQuery.data}</div>
      <div>{weatherQuery.data && console.log(weatherQuery.data)}</div>
      <NowWeather />
    </>
  );
}
