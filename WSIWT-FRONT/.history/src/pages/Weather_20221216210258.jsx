import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getUltraSrtFcst, getVilageFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location } = useCurrentLocation();
  const { isLoading, error, data } = useQuery(["weather", location], () =>
    getVilageFcst(location.latitude, location.longitude)
  );
  console.log(location);
  return (
    <>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <div>{data && console.log(data)}</div>
    </>
  );
}
