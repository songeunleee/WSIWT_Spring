import React, { useState } from "react";
import useCurrentLocation from "../hooks/useCurrentLocation";
import { geolocationOptions } from "./constants/geolocationOptions";

export default function Weather() {
  const { location: currentLocation, error: currentError } =
    useCurrentLocation(geolocationOptions);
  return <div>{currentLocation}</div>;
}
