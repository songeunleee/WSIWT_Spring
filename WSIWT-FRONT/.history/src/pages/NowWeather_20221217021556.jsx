import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getUltraSrtFcst, getVilageFcst } from "../api/weather";
import { dfs_xy_conv } from "../api/xy";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function NowWeather() {
  const { location } = useCurrentLocation();

  const weatherQuery = useQuery(["weather", latitude], () =>
    getVilageFcst(location.longitude, location.latitude)
  );
  const regionQuery = useQuery(["region", rs], () =>
    getRegion(location.longitude, location.latitude)
  );

  return (
    <>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <div>{regionQuery.data}</div>
    </>
  );
}
