import React from "react";

export default function Weather() {
  if ("geolocation" in navigator) {
    /* 위치정보 사용 가능 */
  } else {
    /* 위치정보 사용 불가능 */
  }

  return <div>Weather</div>;
}
