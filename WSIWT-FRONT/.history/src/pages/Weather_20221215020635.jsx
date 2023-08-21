import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getUltraSrtFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location } = useCurrentLocation();
  const [isLoading, error, data] = useQuery(
    ["weather"],
    getUltraSrtFcst(
      location && location.latitude,
      location && location.longitude
    )
  );

  return (
    <>
      {isLoading && <div>loading...</div>}
      <div>{data && data[0].nx}</div>
    </>
  );
}
