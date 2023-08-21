import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onUserStateChange } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  let user = onUserStateChange((user) => {
    return user;
  });
  useEffect(() => {}, []);
  console.log(user);
  return user ? children : console.log();
}
