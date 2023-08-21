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
      <div>{data[0].fcstValue}</div> //기온
      <div>{data[1].fcstValue}</div> //풍속
      <div>{data[4].fcstValue}</div>//강수확률
      <div>{data[5].fcstValue}</div>//1시간 강수량
      <div>{data[6].fcstValue !== "적설없음" && data[6].fcstValue}</div>//1시간
      신적설
    </section>
  );
}
