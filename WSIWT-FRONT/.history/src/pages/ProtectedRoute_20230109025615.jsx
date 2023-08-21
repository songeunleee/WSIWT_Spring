import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  console.log(user && user);
  return user !== null ? children : <Navigate to="/" />;
}
