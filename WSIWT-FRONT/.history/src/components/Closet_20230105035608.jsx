import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";
import { getType } from "../util/getValue";
import ClosetItem from "./ClosetItem";
import { HiPlusCircle } from "react-icons/hi";
import { Navigation } from "swiper";
import { getClothes } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";

export default function Closet({ category, temperature }) {
  const { user, uid, login } = useAuthContext();
  const location = useLocation();
  const isMyCloset = location.pathname === "/mycloset" ? true : false;
  // const [myClothes, setMyClothes] = useState([
  //   {
  //     type: [0],
  //     category: "패딩",
  //     main: "outer",
  //     middle: "paddedCoat",
  //     name: "검은색 숏패딩",
  //     image: "../images/paddedCoat.png",
  //   },
  //   {
  //     type: [0],
  //     main: "etc",
  //     middle: "winter-hat",
  //     category: "겨울 모자",
  //     name: "검은색 모자",
  //     image: "../images/winter-hat.png",
  //   },
  //   {
  //     type: [0],
  //     main: "etc",
  //     middle: "muffler",
  //     category: "목도리",
  //     name: "검은색 목도리",
  //     image: "../images/muffler.png",
  //   },
  //   {
  //     type: [0],
  //     main: "etc",
  //     middle: "gloves",
  //     category: "장갑",
  //     name: "검은색 장갑",
  //     image: "../images/gloves.png",
  //   },
  //   {
  //     type: [1],
  //     main: "outer",
  //     middle: "coat",
  //     category: "코트",
  //     name: "검은색 코트",
  //     image: "../images/coat.png",
  //   },
  // ]);

  const { myCloset: data } = useQuery(
    ["myCloset", uid || ""],
    () => getClothes(uid),
    {
      enabled: !!uid,
    }
  );
  console.log(data);
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
      <div className="flex justify-between items-center mx-4 mb-1">
        <div className=" text-xl font-bold text-color1">MY CLOSET</div>
        {isMyCloset && (
          <Link
            to="/mycloset/new"
            className="text-3xl text-color1 cursor-pointer hover:ease-in duration-200 hover:scale-110"
          >
            <HiPlusCircle />
          </Link>
        )}
      </div>

      {closetList.length === 0 ? (
        user && (
          <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
            <Link
              to="/mycloset"
              className="text-lg text-color1 font-bold border-b-2 border-dashed border-color4"
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
              <ClosetItem key={item.name} item={item} />
            ))}
        </ul>
      )}
    </div>
  );
}
