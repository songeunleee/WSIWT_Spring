import React from "react";

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
        <Button text="login" />
      </div>
      <a className="text-sm text-stone-400" href="/signup">
        회원가입 하러가기
      </a>
    </form>
  );
}
