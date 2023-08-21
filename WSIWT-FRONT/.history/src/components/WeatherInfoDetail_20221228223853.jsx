import React from "react";

export default function WeatherInfoDetail({ data }) {
  console.log(data);
  return (
    <section>
      <div>{data[0].fcstValue}</div>
    </section>
  );
}
