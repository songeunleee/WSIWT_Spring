import React, { useState } from "react";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location: currentLocation, error: currentError } =
    useCurrentLocation();

  return (
    <>
      <div>{currentLocation && currentLocation.latitude}</div>
      <div>{currentLocation && currentLocation.longitude}</div>
    </>
  );
}
