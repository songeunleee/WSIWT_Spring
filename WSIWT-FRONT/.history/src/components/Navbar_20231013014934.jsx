import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCloset } from "react-icons/bi";
import Button from "../ui/Button";
import { useAuthContext } from "../context/AuthContext";
import User from "./User";
import { login } from "../api/Auth";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const { user, logout } = useAuthContext();
  const navigation = useNavigate();
  const handleClick = (e) => {
    navigation("/login");
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
        {user && <Button text={"LOGOUT"} onClick={signOut} />}
      </nav>
    </header>
  );
}
