import React from "react";
import { BiCloset } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link className="flex justify-center text-3xl p-3 ">
      <BiCloset />
    </Link>
  );
}
