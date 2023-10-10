import React from "react";
import Button from "../ui/Button";

export default function Signup() {
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
          type="text"
          placeholder="비밀번호"
        />

        <input
          className="border border-stone-300 rounded-sm w-full p-1 outline-none"
          type="text"
          placeholder="비밀번호 확인"
        />
        <Button text="sign in" />
      </div>
    </form>
  );
}
