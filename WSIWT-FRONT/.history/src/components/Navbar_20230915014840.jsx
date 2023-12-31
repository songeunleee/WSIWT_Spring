import React from "react";
import { Link } from "react-router-dom";
import { BiCloset } from "react-icons/bi";
import Button from "../ui/Button";
import { useAuthContext } from "../context/AuthContext";
import User from "./User";

export default function Navbar() {
  const { user, logout } = useAuthContext();

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
        <a href="http://localhost:8080/oauth2/authorization/google">로그인</a>
        {!user && <Button text={"LogIn"} />}
        {user && <Button text={"LogOut"} onClick={logout} />}
      </nav>
    </header>
  );
}
