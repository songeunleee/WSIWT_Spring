import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";
import { call, userChange } from "../api/Auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const name = localStorage.getItem("USER");
    if (name && name !== null) {
      setUser({ name: name });
    }
  }, []);

  console.log(user);
  return (
    <AuthContext.Provider
      value={{ user: user && user, email: user && user.email }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
