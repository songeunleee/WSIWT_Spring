import React, { useState } from "react";
import { IoIosWater } from "react-icons/io";
import { MdMasks } from "react-icons/md";
import { BsEmojiSunglasses } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";
import moment from "moment";
import GeneralClothes from "./GeneralClothes";

export default function CityInfo({ data }) {
  const warn = data.NEWS_LIST.filter((item) => item.COMMAND !== "");
  const [show, setShow] = useState(false);
  const color = (idx) => {
    if (idx === "좋음" || idx === "낮음") {
      return "bg-blue-500";
    } else if (idx === "보통") {
      return "bg-green-500";
    } else if (idx === "나쁨" || idx === "높음") {
      return "bg-yellow-500";
    } else if (idx === "매우 나쁨") {
      return "bg-red-500";
    }
  };

  const handleClick = () => {
    setShow((pre) => !pre);
  };


  return (
    <section className="border mt-5 flex flex-col w-full p-1">
      <div>
        {warn.length > 0 &&
          warn.map((item) => (
            <div className="flex items-center p-1 m-1 bg-gray-100 rounded-md">
              <div className="flex items-center">
                <div className="text-2xl text-red-600 px-1 animate-pulse">
                  <IoIosWarning />
                </div>
                <div className="flex bg-stone-200 p-1 rounded-2xl justify-center items-center pr-2 mr-2">
                  <div className="bg-stone-400 rounded-xl mr-0.5 px-1.5 font-bold">
                    {item.WARN_VAL}
                  </div>
                  {item.WARN_STRESS}
                </div>
                <div>{item.WARN_MSG}</div>
              </div>
            </div>
          ))}
      </div>

      <div className="">
        {
          data.PCP_MSG.split(".")
            .filter((item) => item !== "")
            .map((item) => (
              <p className="flex items-center p-1 m-1 pr-1 bg-gray-100 rounded-md">
                <div
                  className={` z-10 bg-sky-600 text-xl rounded-md p-1 mr-1 `}
                >
                  <IoIosWater />
                </div>
                {item}
              </p>
            )) /*강수메세지*/
        }
      </div>
      <div className="w-full flex flex-col items-center justify-center p-2 border-b mb-2 border-dashed">
        <div className="font-bold">
          {moment(data.WEATHER_TIME).format("yyyy.MM.DD")}
        </div>
        <div className="font-bold text-4xl">{data.TEMP /*현재온도*/}℃</div>
        <div className="w-2/3">
          <GeneralClothes temperature={parseInt(data.TEMP)} />
        </div>

        <div className="w-full flex justify-center font-bold">
          <div className="text-red-700">최고&nbsp;</div>
          {data.MAX_TEMP /*일 최고온도*/}℃
          <div className="text-blue-700 pl-3">최저&nbsp;</div>
          {data.MIN_TEMP /*일 최저온도*/}℃
        </div>
        <div className="text-stone-700 font-bold">
          체감온도 {data.SENSIBLE_TEMP /*체감온도*/}℃
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full text-center mb-2">
        <div className="flex flex-col font-bold items-center border-r border-dashed">
          미세먼지
          <div
            className={`flex ${color(data.PM10_INDEX)} p-1.5 px-2 rounded-xl`}
          >
            {data.PM10_INDEX /*미세먼지*/}
            <div className="bg-white rounded-xl ml-1 px-1">
              {data.PM10 /*미세먼지*/}{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col font-bold items-center md:border-r border-dashed">
          초미세먼지
          <div
            className={`flex ${color(data.PM25_INDEX)} p-1.5 px-2 rounded-xl`}
          >
            {data.PM25_INDEX /*초미세먼지*/}
            <div className="bg-white rounded-xl ml-1 px-1">
              {data.PM25 /*초미세먼지*/}{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col font-bold items-center border-r border-dashed">
          대기환경
          <div className={`flex ${color(data.AIR_IDX)} p-1.5 px-2 rounded-xl items-center`}>
            {data.AIR_IDX /*통합대기 등급*/}
            <div className="bg-white rounded-xl ml-1 px-1">
              {data.AIR_IDX_MVL /*통합대기 지수*/}
            </div>
            <div
              onClick={() => handleClick()}
              className="bg-stone-50 ml-1 px-1 rounded-xl cursor-pointer text-sm py-0.5"
            >
              {data.AIR_IDX_MAIN /*통합대기 결정물질*/}{" "}
              <div
                className={
                  show
                    ? "absolute text-sm flex flex-col items-start bg-white p-2 border-gray-200 border rounded-md"
                    : "hidden"
                }
              >
                <div className="self-center pb-1">대기 오염 물질</div>

                <table className="font-thin">
                  <tr>
                    <td className="font-bold">PM-2.5</td>
                    <td>초미세먼지</td>
                  </tr>
                  <tr>
                    <td className="font-bold">PM-10</td>
                    <td>미세먼지</td>
                  </tr>
                  <tr>
                    <td className="font-bold">O3</td>
                    <td>오존</td>
                  </tr>
                  <tr>
                    <td className="font-bold">NO2</td>
                    <td>이산화질소</td>
                  </tr>
                  <tr>
                    <td className="font-bold">CO2</td>
                    <td>일산화탄소</td>
                  </tr>
                  <tr>
                    <td className="font-bold">SO2</td>
                    <td>아황산가스</td>
                  </tr>
                  <tr>
                    <td className="font-bold">VOCs</td>
                    <td>휘발성유기화합물질</td>
                  </tr>
                  <tr>
                    <td className="font-bold">황사</td>
                  </tr>
                  <tr>
                    <td className="font-bold">중금속</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-bold items-center">
          자외선
          <div className={`flex ${color(data.UV_INDEX)} p-1.5 px-2 rounded-xl`}>
            {data.UV_INDEX /*통합대기 등급*/}
            <div className="bg-white rounded-xl ml-1 px-1">
              {data.UV_INDEX_LVL /*통합대기 지수*/}
            </div>
          </div>
        </div>
      </div>

      <div div className="">
        {
          data.AIR_MSG.split(".")
            .filter((item) => item !== "")
            .map((item) => (
              <p className="flex items-center p-1 m-1 pr-1 bg-gray-100 rounded-md">
                <div
                  className={` z-10 ${color(
                    data.AIR_IDX
                  )} text-xl rounded-md p-1 mr-1`}
                >
                  <MdMasks />
                </div>
                {item}
              </p>
            )) /*통합대기 메세지*/
        }
      </div>

      <div className="">
        {
          data.UV_MSG.split(".")
            .filter((item) => item !== "")
            .map((item) => (
              <p className="flex items-center p-1 m-1 pr-1 bg-gray-100 rounded-md">
                <div className=" z-10 bg-orange-500 text-xl rounded-md  p-1 mr-1">
                  <BsEmojiSunglasses />
                </div>
                {item}
              </p>
            )) /*자외선 메세지*/
        }
      </div>
    </section>
  );
}
