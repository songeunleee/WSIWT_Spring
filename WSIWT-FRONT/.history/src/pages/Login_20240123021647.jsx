import React, { useState } from "react";
import Button from "../ui/Button";
import { signin } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Login() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((pre) => ({ ...pre, [name]: value }));
  };
  const handleClick = (e) => {
    e.preventDefault();

    signin(input).then((res) => {
      res.error ? alert(res.error) : (window.location.href = "/");
    });
  };
  return (
    <section>
      <p className="text-2xl font-bold text-color1">로그인</p>
      <form className="mt-5">
        <div className="flex flex-col gap-2 ">
          <input
            className="border border-stone-300 rounded-sm w-full p-1 outline-none"
            type="text"
            name="username"
            placeholder="아이디"
            onChange={handleChange}
          />

          <input
            className="border border-stone-300 rounded-sm w-full p-1 outline-none"
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
          />
          <Button text="login" onClick={handleClick} />
        </div>
        <a className="text-sm text-stone-400" href="/signup">
          회원가입 하러가기
        </a>
        <div className="font-bold text-color1 text-xl mt-2">SNS 로그인</div>
        <div className="flex justify-center items-center gap-10 mt-3">
          <img className="w-11" src="images/google.png" alt="" />
          <img className="w-11" src="images/github.png" alt="" />
        </div>
      </form>
    </section>
  );
}
