import React, { useEffect, useState } from "react";
import { getUltraSrtFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  useEffect(() => {
    getUltraSrtFcst();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
