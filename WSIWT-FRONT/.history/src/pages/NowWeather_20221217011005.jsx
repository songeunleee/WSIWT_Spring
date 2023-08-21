import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getUltraSrtFcst, getVilageFcst } from "../api/weather";
import { dfs_xy_conv } from "../api/xy";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function NowWeather() {
  const { location } = useCurrentLocation();
  const weatherQuery = useQuery(["weather", location], () =>
    getVilageFcst(location.latitude, location.longitude)
  );
  const { isLoading, error, data } = weatherQuery;

  const rigionQuery = useQuery(["rigion", location], () =>
    getRegion(location.latitude, location.longitude)
  );

  const xy = dfs_xy_conv(location.latitude, location.longitude);
  console.log(xy);
  return (
    <>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <div>{location.latitude}</div>
      <div>{location.longitude}</div>
    </>
  );
}
