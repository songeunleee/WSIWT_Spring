import { Navigate } from "react-router-dom";

export default function SocialLogin() {
  const getUrlParameter = (name) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get(name);
  };

  const token = getUrlParameter("token");
  const user = getUrlParameter("user");
  const username = getUrlParameter("username");
  const picture = getUrlParameter("picture");
  const id = getUrlParameter("id");

  console.log("토큰", token);
  console.log("유저", JSON.stringify(user));

  if (token) {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("USER", JSON.stringify({ user }));

    return <Navigate to="/" />;
  } else {
    return <Navigate to="/login" />;
  }
}
