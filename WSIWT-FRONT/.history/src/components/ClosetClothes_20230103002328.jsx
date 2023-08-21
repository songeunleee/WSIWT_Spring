import React from "react";
import { Link } from "react-router-dom";
import { login } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";

export default function ClosetClothes({ category }) {
  const { user, login } = useAuthContext();
  return (
    <div className=" bg-color2 rounded-3xl p-2">
      {!user && (
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          <Button text={"로그인"} onClick={login} /> 후 내 옷장에 옷을 추가해
          보세요!
          <div>{category && category}</div>
        </div>
      )}
      {user && (
        <div className="p-2 px-4 rounded-3xl border-2 border-dashed border-color1">
          <Link to="/mycloset" className="text-lg text-color4 font-bold">
            내 옷장
          </Link>{" "}
          에 옷을 추가해 보세요!
          <div>{category && category}</div>
        </div>
      )}
    </div>
  );
}
