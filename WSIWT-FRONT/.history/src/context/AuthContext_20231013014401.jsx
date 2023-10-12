import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";
import { call, userChange } from "../api/Auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    if (localStorage.getItem("USER")) {
      setUser({ username: localStorage.getItem("USER") });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: user && user.username, email: user && user.username }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
