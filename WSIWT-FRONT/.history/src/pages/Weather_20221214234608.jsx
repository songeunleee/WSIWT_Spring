import React, { useEffect, useState } from "react";
import { getUltraSrtFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location } = useCurrentLocation();
  useEffect(() => {
    getUltraSrtFcst(currentLocation.latitude, currentLocation.longitude);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
