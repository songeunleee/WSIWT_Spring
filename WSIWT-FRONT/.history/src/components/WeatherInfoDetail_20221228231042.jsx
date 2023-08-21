import React from "react";
import { weatherIcon } from "../util/getValue";

export default function WeatherInfoDetail({ data }) {
  console.log(data);
  return (
    <section>
      <div>
        {weatherIcon(
          parseInt(data[2].fcstValue),

          parseInt(data[3].fcstValue)
        )}
      </div>
      <div>{data[0].fcstValue}</div>
      <div>{data[1].fcstValue}</div>

      <div>{data[4].fcstValue}</div>
      <div>{data[5].fcstValue}</div>
      <div>{data[6].fcstValue}</div>
    </section>
  );
}
