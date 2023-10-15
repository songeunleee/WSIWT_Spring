import { createContext, useContext, useEffect, useState } from "react";
import { signout } from "../api/Auth";
import { call, userChange } from "../api/Auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("USER"));

    if (user && user !== null) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: user && user, email: user && user.email, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
