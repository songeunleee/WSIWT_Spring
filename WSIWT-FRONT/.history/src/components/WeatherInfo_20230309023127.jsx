import moment from "moment";
import React from "react";
import TimeWeather from "./TimeWeather";
import { MdDateRange } from "react-icons/md";

export default function WeatherInfo({ data, date, time, today }) {
  if (time > "2310" || time < "0000") {
    date = moment(date).add(1, "days").format("YYYYMMDD");
    today = false;
  }
  const now = data.filter(
    (item) => item.fcstDate == "20230310" && item.fcstTime == "0100"
  );
  const D = division(data, 7);
  console.log(
    D.filter(
      (item, i) =>
        item[0].fcstDate === "20230310" && item[0].fcstTime === "0100"
    )
  );
  return (
    <section className="p-3 pt-5">
      <div className="flex justify-center items-center pb-5 text-xl font-bold">
        <MdDateRange /> &nbsp;
        {moment(date).format("YYYY. MM. DD")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

const division = (arr, n) => {
  const length = arr.length;
  const divide = Math.floor(length / n);
  const newArray = [];

  for (let i = 0; i < divide; i++) {
    newArray.push(arr.splice(0, n));
  }

  return newArray;
};
