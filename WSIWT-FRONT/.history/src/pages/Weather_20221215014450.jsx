import React, { useEffect, useState } from "react";
import { getUltraSrtFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location } = useCurrentLocation();
  const [data, setData] = useState({});

  getUltraSrtFcst(
    location && location.latitude,
    location && location.longitude
  ).then(setData);

  return (
    <>
      <div>{location && location.latitude}</div>
    </>
  );
}
