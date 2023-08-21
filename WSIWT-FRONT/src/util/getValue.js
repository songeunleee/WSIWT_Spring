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
