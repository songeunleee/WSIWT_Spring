import React from "react";

export default function Weather() {
  navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  });

  return <div>Weather</div>;
}
