import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onUserStateChange } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  console.log(user && user);
  return user !== null ? children : <Navigate to="/" />;
}
