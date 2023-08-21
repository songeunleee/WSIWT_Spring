import React, { useState } from "react";
import ClosetClothes from "../components/ClosetClothes";

export default function MyCloset() {
  const [myClothes, setMyClothes] = useState([
    {
      type: [6, 5, 4, 3, 2],
      main: "bottom",
      middle: "pants",
      sub: "basic",
      category: "긴바지",
      name:'하얀색 바지',
      image: "../images/basic-pants.png",
    },
    {
      type: [6, 5, 4, 3, 2],
      main: "bottom",
      middle: "pants",
      sub: "basic",
      category: "긴바지",
      name:"검은색 바지"
      image: "../images/basic-pants.png",
    },

  ]);
  return {};
}
