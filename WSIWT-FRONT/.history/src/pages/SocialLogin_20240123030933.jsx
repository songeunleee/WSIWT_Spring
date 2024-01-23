import { Navigate } from "react-router-dom";

export default function SocialLogin() {
  const getUrlParameter = (name) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get(name);
  };

  const token = getUrlParameter("token");
  const user = getUrlParameter("user");

  console.log("토큰", token);
  console.log("이름", user);

  if (token) {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("USER", JSON.stringify({ username: user }));

    return <Navigate to="/" />;
  } else {
    return <Navigate to="/login" />;
  }
}
