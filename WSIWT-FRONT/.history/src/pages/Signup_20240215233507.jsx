import React, { useState } from "react";
import Button from "../ui/Button";
import { signup } from "../api/Auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [password, setPassword] = useState("");
  const [passwordchk, setPasswordchk] = useState("");
  const [username, setUsername] = useState("");
  const [verify, setVerify] = useState(false);
  const navigation = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handlechangePassword = (e) => {
    setPassword(e.target.value);
    e.target.value !== passwordchk ? setVerify(true) : setVerify(false);
  };

  const handlechangePasswordCheck = (e) => {
    setPasswordchk(e.target.value);
    password !== e.target.value ? setVerify(true) : setVerify(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    !verify
      ? signup({
          username: username,
          password: password,
          picture: "images/user.png",
        }).then((res) => {
          if (res.error) alert(res.error);
          else {
            alert("가입을 축하합니다!");
            navigation("/login");
          }
        })
      : alert("비밀번호를 확인해 주세요");
  };

  return (
    <section className="p-2">
      <p className="font-bold text-color3 text-2xl">회원가입</p>
      <form className="mt-5">
        <div className="flex flex-col gap-2 ">
          <input
            className="border border-stone-300 rounded-sm w-full p-1 outline-none"
            type="text"
            placeholder="아이디"
            onChange={handleChange}
          />

          <input
            className="border border-stone-300 rounded-sm w-full p-1 outline-none"
            type="password"
            placeholder="비밀번호"
            onChange={handlechangePassword}
          />

          <input
            className="border border-stone-300 rounded-sm w-full p-1 outline-none"
            type="password"
            placeholder="비밀번호 확인"
            onChange={handlechangePasswordCheck}
          />
          {verify && <p>비밀번호를 다시입력하세요</p>}

          <Button text="sign up" onClick={handleClick} color={"color4"} />
        </div>
      </form>
    </section>
  );
}
