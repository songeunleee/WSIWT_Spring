import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();

  console.log(user);

  if (user === undefined) {
    return;
  }
  return user !== null ? children : <Navigate to="/" />;
}
