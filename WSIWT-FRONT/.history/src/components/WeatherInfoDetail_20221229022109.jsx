import React from "react";
import { weatherIcon, weatherImg } from "../util/getValue";

export default function WeatherInfoDetail({ data }) {
  console.log(data);
  return (
    <section className="flex flex-col items-center">
      <div className="w-48">
        {weatherImg(
          data[0].fcstTime,
          parseInt(data[2].fcstValue),

          parseInt(data[3].fcstValue)
        )}
      </div>
      <div className="text-5xl">{data[0].fcstValue /*기온*/}℃</div>
      <div>{data[1].fcstValue /*풍속*/}</div>
      <div>{data[4].fcstValue /*강수확률*/}</div>
      <div>{data[5].fcstValue /*1시간 강수량*/}</div>
      <div>
        {data[6].fcstValue !== "적설없음" && data[6].fcstValue /*1시간 신적설*/}
      </div>
    </section>
  );
}
