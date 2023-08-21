import React from "react";
import { weatherImg } from "../util/getValue";
import { RiWindyLine } from "react-icons/ri";
import { SiRainmeter } from "react-icons/si";
import { BsUmbrella, BsSnow2 } from "react-icons/bs";

export default function WeatherInfoDetail({ data }) {
  console.log((data[6].fcstValue = 1));

  return (
    <section className="flex flex-col items-center w-full bg-gradient-to-br from-color1 to-color2 mb-2 py-4 rounded-lg">
      <div>{` ${data[0].fcstDate}  ${data[0].fcstTime}`}</div>
      <div className="w-48">
        {weatherImg(
          data[0].fcstTime,
          parseInt(data[2].fcstValue),

          parseInt(data[3].fcstValue)
        )}
      </div>
      <div className="text-5xl p-1 mb-2">{data[0].fcstValue /*기온*/}℃</div>
      <div className=" bg-opacity-30 bg-slate-50 rounded-tl-md rounded-md flex flex-col gap-2 p-2 pt-4 ">
        <div className="flex items-center justify-center">
          <RiWindyLine /> 풍속 {data[1].fcstValue /*풍속*/}
        </div>

        <div className="flex items-center   justify-center">
          <BsUmbrella /> 강수확률 {data[4].fcstValue /*강수확률*/}%
        </div>
        <div className="flex items-center  justify-center">
          <SiRainmeter />
          1시간 강수량{" "}
          {
            data[5].fcstValue === "강수없음"
              ? 0
              : data[5].fcstValue /*1시간 강수량*/
          }
          mm
        </div>
        <div className="flex items-center  justify-center">
          {
            data[6].fcstValue !== "적설없음" && (
              <React.Fragment>
                <BsSnow2 />
              </React.Fragment>
            )
            /*1시간 신적설*/
          }
        </div>
      </div>
    </section>
  );
}
