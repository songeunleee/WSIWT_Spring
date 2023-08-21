import React from "react";
import { weatherImg } from "../util/getValue";
import { RiWindyLine } from "react-icons/ri";
import { SiRainmeter } from "react-icons/si";
import { BsUmbrella } from "react-icons/bs";

export default function WeatherInfoDetail({ data }) {
  console.log(data);
  return (
    <section className="flex flex-col items-center w-full bg-zinc-500 mb-2 py-4 rounded-lg">
      <div className="w-48">
        {weatherImg(
          data[0].fcstTime,
          parseInt(data[2].fcstValue),

          parseInt(data[3].fcstValue)
        )}
      </div>
      <div className="text-5xl p-1 mb-2">{data[0].fcstValue /*기온*/}℃</div>
      <div className="">
        <div className="justify-center flex items-center p-1  bg-slate-50 rounded-tl-md rounded-tr-md">
          <RiWindyLine /> 풍속 {data[1].fcstValue /*풍속*/}
        </div>

        <div className="flex items-center justify-center p-1  bg-slate-50 border-y border-dashed border-zinc-500">
          <BsUmbrella /> 강수확률 {data[4].fcstValue /*강수확률*/}%
        </div>
        <div className="flex items-center p-1 px-2 bg-slate-50 rounded-bl-md rounded-br-md">
          <SiRainmeter />
          1시간 강수량{" "}
          {
            data[5].fcstValue === "강수없음"
              ? 0
              : data[5].fcstValue /*1시간 강수량*/
          }
          mm
        </div>
        <div>
          {
            data[6].fcstValue !== "적설없음" &&
              data[6].fcstValue /*1시간 신적설*/
          }
        </div>
      </div>
    </section>
  );
}
