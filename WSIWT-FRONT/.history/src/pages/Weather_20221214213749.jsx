import React, { useState } from "react";

export default function Weather() {
  const [latitude, setLatitude] = useState();
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      doSomething(position.coords.latitude, position.coords.longitude);
    });
  } else {
    /* 위치정보 사용 불가능 */
  }

  return <div>Weather</div>;
}
