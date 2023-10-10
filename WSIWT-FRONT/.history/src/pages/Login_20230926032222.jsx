import React from "react";
import Button from "../ui/Button";

export default function Login() {
  return (
    <form>
      <div>
        <input
          className="border border-stone-300 rounded-lg w-full p-1"
          type="text"
          placeholder="아이디"
        />

        <input type="text" placeholder="비밀번호" />
      </div>
      <Button text="login" />
    </form>
  );
}
