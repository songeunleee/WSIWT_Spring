import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";
import Clothes from "./Clothes";
import ClothesDetailItem from "./ClothesDetailItem";

export default function ClosetClothes({ category }) {
  const { user, login } = useAuthContext();
  const [myClothes, setMyClothes] = useState([
    {
      type: [6, 5, 4, 3, 2],
      main: "bottom",
      middle: "pants",
      sub: "basic",
      category: "긴바지",
      name: "하얀색 바지",
      image: "../images/basic-pants.png",
    },
    {
      type: [6, 5, 4, 3, 2],
      main: "bottom",
      middle: "pants",
      sub: "basic",
      category: "긴바지",
      name: "검은색 바지",
      image: "../images/basic-pants.png",
    },
  ]);

  return (
    <div className=" bg-color2 rounded-3xl p-2">
      {!myClothes && !user && (
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          <Button text={"로그인"} onClick={login} /> 후 내 옷장에 옷을 추가해
          보세요!
          <div>{category && category}</div>
        </div>
      )}
      {!myClothes && user && (
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          <Link
            to="/mycloset"
            className="text-lg text-color4 font-bold border-b-2 border-color4"
          >
            내 옷장
          </Link>{" "}
          에 옷을 추가해 보세요!
          <div>{category && category}</div>
        </div>
      )}
      {myClothes &&
        myClothes.map((item) => {
          <ClothesDetailItem key={item.name} item={item} />;
        })}
    </div>
  );
}
