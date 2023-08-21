import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onUserStateChange } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  let user;
  useEffect(() => {
    user = onUserStateChange((user) => {
      return user;
    });
  }, []);
  console.log(user);
  return user ? children : <Navigate to="/" />;
}
