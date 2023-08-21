import React from "react";
import { BiCloset } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link
      to="/"
      className="box-content flex items-center font-bold justify-center text-3xl p-3 "
    >
      <img className="w-12 pr-2" src="images/logo.png" alt="" />
      <div>WSIWT</div>
    </Link>
  );
}
