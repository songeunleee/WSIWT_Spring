import React from "react";
import { Link } from "react-router-dom";
import { BiCloset } from "react-icons/bi";
import Button from "../ui/Button";
import { useAuthContext } from "../context/AuthContext";
import User from "./User";
import { login } from "../api/Auth";

export default function Navbar() {
  const { user, logout } = useAuthContext();

  const handleClick = (e) => {
    window.open(
      "login",
      "pop01",
      "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no"
    );
  };
  return (
    <header className="flex justify-between items-center p-2 py-3">
      <Link
        to="/"
        className="flex justify-center items-center font-bold bg-color text-3xl"
      >
        <img className="w-12 mr-2" src="../images/logo.png" alt="d" />
        <div>WSIWT</div>
      </Link>
      <nav className="flex items-center text-xl gap-2 ml-2">
        {user && <User user={user} />}
        {user && (
          <Link to="/mycloset" className="text-4xl">
            <BiCloset />
          </Link>
        )}

        {!user && <Button text={"LOGIN"} onClick={handleClick} />}
        {user && (
          <a className=" bg-color1 text-white rounded-sm hover:brightness-110 p-2 px-4 text-grey">
            LOGOUT
          </a>
        )}
      </nav>
    </header>
  );
}
