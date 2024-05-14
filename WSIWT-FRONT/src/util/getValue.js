import moment from "moment";

export function getType(temperature) {
  if (temperature <= 4) {
    return 0;
  } else if (temperature >= 5 && temperature <= 8) {
    return 1;
  } else if (temperature >= 9 && temperature <= 11) {
    return 2;
  } else if (temperature >= 12 && temperature <= 16) {
    return 3;
  } else if (temperature >= 17 && temperature <= 19) {
    return 4;
  } else if (temperature >= 20 && temperature <= 22) {
    return 5;
  } else if (temperature >= 23 && temperature <= 27) {
    return 6;
  } else if (temperature >= 28) {
    return 7;
  }
}

export function time(fcstTime) {
  const time = `${fcstTime.substr(0, 2)}:${fcstTime.substr(2, 4)}`;
  return time;
}

export function weatherImg(TIME, SKY, PTY) {
  if (TIME > "0500" && TIME < "2000") {
    if (PTY === 0) {
      switch (SKY) {
        case 1:
          return <img src="../images/weather/sunny.png" alt="sunny" />;

        case 3:
          return (
            <img src="../images/weather/partlySunny.png" alt="partlySunny" />
          );

        case 4:
          return <img src="../images/weather/cloudy.png" alt="cloudy" />;
      }
    } else {
      switch (PTY) {
        case 1:
          return <img src="../images/weather/rainy.png" alt="rainy" />;
        case 2:
          return <img src="../images/weather/rain-snow.png" alt="rain-snow" />;

        case 3:
          return <img src="../images/weather/snow.png" alt="snow" />;
        case 4:
          return <img src="../images/weather/shower.png" alt="shower" />;
      }
    }
  } else {
    if (PTY === 0) {
      switch (SKY) {
        case 1:
          return <img src="../images/weather/moon.png" alt="moon" />;

        case 3:
          return (
            <img src="../images/weather/partlyMoon.png" alt="partlyMoon" />
          );

        case 4:
          return (
            <img src="../images/weather/cloudyMoon.png" alt="cloudyMoon" />
          );
      }
    } else {
      switch (PTY) {
        case 1:
          return <img src="../images/weather/rainyMoon.png" alt="rainyMoon" />;
        case 2:
          return (
            <img
              src="../images/weather/rain-snow-moon.png"
              alt="rain-snow-moon"
            />
          );
        case 3:
          return <img src="../images/weather/snow.png" alt="snow" />;
        case 4:
          return (
            <img src="../images/weather/showerMoon.png" alt="showerMoon" />
          );
      }
    }
  }
}

export function getSKY(SKY_STTS) {
  if (SKY_STTS === "맑음") return 1;
  else if (SKY_STTS == "구름 많음") return 3;
  else return 4;
}

export function getPTY(PREFCPT_TYPE) {
  if (PREFCPT_TYPE === "비") return 1;
  else if (PREFCPT_TYPE === "눈") return 3;
  else if (PREFCPT_TYPE === "소나기") return 4;
  else if(PREFCPT_TYPE == '없음') return 0;
  else return 2;
}

export function setType(middle, sub) {
  let type = [];
  if (!sub) {
    if (
      middle === "paddedCoat" ||
      middle === "winter_hat" ||
      middle === "muffler" ||
      middle === "gloves"
    ) {
      type.push(0);
    }
    if (middle === "coat" || middle === "sweater") {
      type.push(1);
    }
    if (
      middle === "jacket" ||
      middle === "black_tights" ||
      middle === "trench_coat" ||
      middle === "pants"
    ) {
      type.push(2);
    }
    if (
      middle === "cardigan" ||
      middle === "skin_tights" ||
      middle === "jacket" ||
      middle === "long_sleeve" ||
      middle === "pants" ||
      middle === "shirt"
    ) {
      type.push(3);
    }
    if (
      middle === "long_sleeve" ||
      middle === "shirt" ||
      middle === "hoodie" ||
      middle === "pants"
    ) {
      type.push(4);
    }
    if (
      middle === "blouse" ||
      middle === "long_sleeve" ||
      middle === "hoodie" ||
      middle === "pants"
    ) {
      type.push(5);
    }
    if (middle === "short_sleeve" || middle === "short" || middle === "pants") {
      type.push(6);
    }
    if (
      middle === "short" ||
      middle === "sleeveless" ||
      middle === "short_sleeve" ||
      middle === "thin_dress"
    ) {
      type.push(7);
    }
  } else {
    if (middle === "jacket") {
      switch (sub) {
        case "leather":
          type = [1];
          break;
        case "thin":
          type = [4];
          break;
      }
    }
    if (middle === "sweater") {
      switch (sub) {
        case "thin":
          type = [4];
          break;
      }
    }
    if (middle === "long_sleeve") {
      switch (sub) {
        case "thin":
          type = [6];
          break;
      }
    }
    if (middle === "shirt") {
      switch (sub) {
        case "thin":
          type = [6];
          break;
        case "short":
          type = [6, 7];
          break;
      }
    }
    if (middle === "dress") {
      switch (sub) {
        case "thin":
          type = [7];
          break;
      }
    }
    if (middle === "cardigan") {
      switch (sub) {
        case "thin":
          type = [4, 5];
          break;
      }
    }
    if (middle === "pants") {
      switch (sub) {
        case "slacks":
          type = [4, 5];
          break;
        case "jeans":
          type = [1, 2, 3, 4, 5];
          break;
        case "fleece_lined":
          type = [0, 1, 2];
          break;
      }
    }
    if (middle === "hoodie") {
      switch (sub) {
        case "fleece_lined":
          type = [0, 1, 3];
          break;
      }
    }
  }
  return type;
}

export const publishedAt = (publishedAt, text) => {
  const now = new Date();
  const time = new Date(publishedAt);

  let result;
  const t = (moment(now).toDate() - moment(time).add(9, 'h').toDate()) / 1000;

  if (t < 60) return Math.floor(t) + "초 전" + text;
  const tm = t / 60;
  if (tm < 60) return Math.floor(tm) + "분 전" + text;
  const th = tm / 60;
  if (th < 24) return Math.floor(th) + "시간 전" + text;
  const td = th / 24;
  if (td < 8) return Math.floor(td) + "일 전" + text;
  const tw = td / 7;
  if (tw < 5) return Math.floor(tw) + "주 전" + text;
  const tmon = td / 30;
  if (tw < 30) return Math.floor(tmon) + "달 전" + text;
  const ty = td / 365;
  return Math.floor(ty) + "년 전" + text;
};
export function division(arr, n) {
  const length = arr.length;
  const divide = Math.floor(length / n);
  const newArray = [];

  for (let i = 0; i < divide; i++) {
    newArray.push(arr.splice(0, n));
  }

  return newArray;
}

export const utcToKst = (value) => {
  const dateValue = moment(value).add(9, 'h');
  return dateValue;
}