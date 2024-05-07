import React from "react";
import { getPTY, getSKY, time, weatherImg } from "../util/getValue";
import { RiWindyLine } from "react-icons/ri";
import { SiRainmeter } from "react-icons/si";
import { BsUmbrella, BsSnow2 } from "react-icons/bs";
import moment from "moment/moment";

export default function WeatherInfoDetail({ data }) {
  const temperature = data.city ? data.TEMP : data[0].fcstValue;
  const dataTime = data.city ? data.FCST_DT.substr(8,4) : data[0].fcstTime;
  const dataDate = data.city ? data.FCST_DT.substr(0,8) : data[0].fcstDate;
  const SKY = data.city ? getSKY(data.SKY_STTS)  : data[2].fcstValue;
  const PTY = data.city ? getPTY(data.PRECPT_TYPE)  : data[3].fcstValue;
  const PRECIPITATION = data.city ? data.PRECIPITATION : data[5].fcstValue;
  const RAIN_CHANCE = data.city ? data.RAIN_CHANCE : data[4].fcstValue;
  const windSpeed = !data.city && data[1].fcstValue;
  const snow = !data.city && data[6].fcstValue;

  return (
    <section className="flex flex-col items-center w-full bg-gradient-to-t  from-color1 to-color2 mb-2 py-4 rounded-lg">
      <div className="font-bold">{moment(dataDate).format("yyyy. MM. DD")}</div>
      <div className="text-xl font-bold">{time(dataTime)}</div>
      <div className="w-48 p-3 ">
        {weatherImg(
          dataTime,
          parseInt(SKY),

          parseInt(PTY)
        )}
      </div>
      <div className="text-5xl p-1 mb-2">{temperature /*기온*/}℃</div>
      <div className=" bg-opacity-50 bg-white rounded-tl-md rounded-md flex flex-col px-2 py-1 ">
        { windSpeed && (
          <div className="flex items-center justify-center p-1">
            <RiWindyLine /> 풍속 {windSpeed /*풍속*/}
          </div>
        )}

        <div className="flex items-center justify-center p-1 border-t border-dashed border-color1">
          <BsUmbrella /> 강수확률 {RAIN_CHANCE /*강수확률*/}%
        </div>
        <div className="flex items-center justify-center p-1 border-t border-dashed border-color1">
          <SiRainmeter />
          1시간 강수량{" "}
          {
            PRECIPITATION === "강수없음" || '-'
              ? 0
              : PRECIPITATION /*1시간 강수량*/
          }
        </div>

        {
          snow && snow !== "적설없음" && (
            <div className="flex items-center  justify-center p-1 border-t border-dashed border-color1">
              <BsSnow2 />
              1시간 신적설 {snow}
            </div>
          )
          /*1시간 신적설*/
        }
      </div>
    </section>
  );
}
