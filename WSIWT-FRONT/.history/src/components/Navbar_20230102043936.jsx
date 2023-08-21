import React from "react";
import { Link } from "react-router-dom";
import { BiCloset } from "react-icons.bi";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="flex justify-center font-bold bg-color text-3xl p-5 "
      >
        <img className="w-12 mr-2" src="../images/logo.png" alt="d" />
        <div>WSIWT</div>
      </Link>
      <Link to="/mycloset">
        <BiCloset />
      </Link>
      <Button text={"Login"} />
      <Button text={"LogOut"} />
    </div>
  );
}
