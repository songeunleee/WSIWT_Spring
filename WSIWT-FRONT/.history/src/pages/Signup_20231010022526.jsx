import React, { useState } from "react";
import Button from "../ui/Button";
import { signup } from "../api/Auth";

export default function Signup() {
  const [password, setPassword] = useState("");
  const [passwordchk, setPasswordchk] = useState("");
  const [username, setUsername] = useState("");
  const [verify, setVerify] = useState(false);

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
    !verify ? signup(username, password) : alert("비밀번호를 확인해 주세요");
  };

  return (
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

        <Button text="sign in" onClick={handleClick} />
      </div>
    </form>
  );
}
