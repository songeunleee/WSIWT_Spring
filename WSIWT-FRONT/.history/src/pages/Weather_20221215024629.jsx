import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getUltraSrtFcst } from "../api/weather";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Weather() {
  const { location } = useCurrentLocation();
  const { isLoading, error, data } = useQuery(["weather", location], () =>
    getUltraSrtFcst(location.latitude, location.longitude)
  );

  return (
    <>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <div>
        {data &&
          console.log(
            Math.min.apply(
              null,
              data
                .filter(
                  (item) => item.fcstTime > "0200" && item.fcstTime < "0800"
                )
                .filter((item) => item.category === "T1H")
                .map((item) => item.fcstValue)
            )
          )}
      </div>
    </>
  );
}
