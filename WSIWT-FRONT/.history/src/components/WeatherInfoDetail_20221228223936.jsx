import React from "react";

export default function WeatherInfoDetail({ data }) {
  console.log(data);
  return (
    <section>
      <div>{data[0].fcstValue}</div>
      <div>{data[1].fcstValue}</div>
      <div>{data[2].fcstValue}</div>
      <div>{data[3].fcstValue}</div>
      <div>{data[4].fcstValue}</div>
      <div>{data[5].fcstValue}</div>
      <div>{data[6].fcstValue}</div>
      <div>{data[7].fcstValue}</div>
    </section>
  );
}
