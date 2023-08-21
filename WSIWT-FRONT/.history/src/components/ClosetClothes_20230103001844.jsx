import React from "react";
import { login } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";

export default function ClosetClothes({ category }) {
  const { user, login } = useAuthContext();
  return <div className=" bg-color2 rounded-3xl p-2">{user}</div>;
}
