import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  console.log(user);
  return user ? children : <Navigate to="/" replace />;
}
