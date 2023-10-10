import React, { useState } from "react";
import Button from "../ui/Button";

export default function Login() {
  const [input, setInput] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ [name]: value });
  };
  console.log(input);
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
            type="text"
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
          />
          <Button text="login" />
        </div>
        <a className="text-sm text-stone-400" href="/signup">
          회원가입 하러가기
        </a>
      </form>
    </section>
  );
}
