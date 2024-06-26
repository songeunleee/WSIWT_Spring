import moment from "moment";
import React from "react";
import TimeWeather from "./TimeWeather";
import { MdDateRange } from "react-icons/md";
import { division } from "../util/getValue";

export default function WeatherInfo({ data, date, time, today }) {
  if (time > "2310" || time < "0000") {
    date = moment(date).add(1, "days").format("YYYYMMDD");
    today = false;
  }



  return (
    <section className="py-3 pt-5">
      <div className="flex justify-center items-center pb-5 text-xl font-bold">
        <MdDateRange /> &nbsp;
        {moment(date).format("YYYY. MM. DD")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data &&
          division(
            data.filter((item) =>
              today
                ? item.fcstTime >= time.substr(0, 2) + "00" &&
                  item.fcstDate === date
                : item.fcstDate === date
            ),
            7
          ).map((item, i) => <TimeWeather key={i} data={item} />)}
      </div>
    </section>
  );
}


