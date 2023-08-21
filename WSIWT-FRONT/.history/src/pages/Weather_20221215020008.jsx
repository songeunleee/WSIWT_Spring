import React, { useEffect, useState } from "react";
import { getUltraSrtFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location } = useCurrentLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    getUltraSrtFcst(
      location && location.latitude,
      location && location.longitude
    ).then(setData);
  }, [data]);

  return (
    <>
      <div>{data && data[0].nx}</div>
    </>
  );
}
