import React, { useState } from "react";
import Button from "../ui/Button";

export default function Signup() {
  const [password, setPassword] = useState("");
  const [passwordchk, setPasswordchk] = useState("");

  const handlechangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlechangePasswordCheck = (e) => {
    setPasswordchk(e.target.value);
  };
  return (
    <form className="mt-5">
      <div className="flex flex-col gap-2 ">
        <input
          className="border border-stone-300 rounded-sm w-full p-1 outline-none"
          type="text"
          placeholder="아이디"
        />

        <input
          className="border border-stone-300 rounded-sm w-full p-1 outline-none"
          type="password"
          placeholder="비밀번호"
          onChange={handlechange}
        />

        <input
          className="border border-stone-300 rounded-sm w-full p-1 outline-none"
          type="password"
          placeholder="비밀번호 확인"
          onChange={handlechange}
        />

        <Button text="sign in" />
      </div>
    </form>
  );
}
