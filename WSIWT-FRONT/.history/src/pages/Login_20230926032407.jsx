import React from "react";
import Button from "../ui/Button";

export default function Login() {
  return (
    <form>
      <div className="flex flex-col">
        <input
          className="border border-stone-300 rounded-sm w-full p-1"
          type="text"
          placeholder="아이디"
        />

        <input
          className="border border-stone-300 rounded-sm w-full p-1"
          type="text"
          placeholder="비밀번호"
        />
        <Button text="login" />
      </div>
    </form>
  );
}
