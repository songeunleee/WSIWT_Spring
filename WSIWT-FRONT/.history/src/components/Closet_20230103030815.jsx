import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";
import { getType } from "../util/getValue";
import ClosetList from "./ClosetList";

export default function Closet({ category, temperature }) {
  const { user, login } = useAuthContext();
  const [myClothes, setMyClothes] = useState([
    {
      type: [0],
      category: "패딩",
      main: "outer",
      middle: "paddedCoat",
      name: "검은색 숏패딩",
      image: "../images/paddedCoat.png",
    },
    {
      type: [0],
      main: "etc",
      middle: "winter-hat",
      category: "겨울 모자",
      name: "검은색 모자",
      image: "../images/winter-hat.png",
    },
    {
      type: [0],
      main: "etc",
      middle: "muffler",
      category: "목도리",
      name: "검은색 목도리",
      image: "../images/muffler.png",
    },
    {
      type: [0],
      main: "etc",
      middle: "gloves",
      category: "장갑",
      name: "검은색 장갑",
      image: "../images/gloves.png",
    },
    {
      type: [1],
      main: "outer",
      middle: "coat",
      category: "코트",
      name: "검은색 코트",
      image: "../images/coat.png",
    },
  ]);
  let closetList = myClothes && myClothes;

  if (temperature) {
    closetList =
      myClothes &&
      myClothes.filter((item) => item.type.includes(getType(temperature)));
  }
  if (category) {
    closetList =
      myClothes && myClothes.filter((item) => item.category === category);
  }

  return (
    <div className=" bg-color2 rounded-3xl p-2">
      <div className="flex justify-between items-center">
        <div className="pl-4 pb-1 text-xl font-bold text-color1">MY CLOSET</div>
        <div className="mr-4 w-2 h-2 text-xl font-bold text-color1 border-2 border-color1 border-dashed rounded-full ">
          +
        </div>
      </div>

      {closetList.length === 0 ? (
        user && (
          <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
            <Link
              to="/mycloset"
              className="text-lg text-color1 font-bold border-b-2 border-color4"
            >
              내 옷장
            </Link>{" "}
            에 옷을 추가해 보세요!
          </div>
        )
      ) : !user ? (
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          <Button text={"로그인"} onClick={login} /> 후 내 옷장에 옷을 추가해
          보세요!
        </div>
      ) : (
        <ul className="p-2 rounded-3xl border-2 border-dashed border-color1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2">
          {user &&
            closetList.map((item) => (
              <ClosetList key={item.name} item={item} />
            ))}
        </ul>
      )}
    </div>
  );
}
