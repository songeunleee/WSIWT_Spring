import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/button";

export default function Navbar() {
  return (
    <div>
      <Link
        to="/"
        className="flex justify-center font-bold bg-color text-3xl p-5 "
      >
        <img className="w-12 mr-2" src="../images/logo.png" alt="d" />
        <div>WSIWT</div>
      </Link>
      <Button name={Login} />
    </div>
  );
}
