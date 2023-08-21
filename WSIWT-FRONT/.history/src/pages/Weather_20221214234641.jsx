import React, { useEffect, useState } from "react";
import { getUltraSrtFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location } = useCurrentLocation();
  useEffect(() => {
    getUltraSrtFcst(
      location && location.latitude,
      location && location.longitude
    );
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
