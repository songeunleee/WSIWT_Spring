import React from "react";

export default function Login() {
  return (
    <form>
      <div>
        <input
          className="border border-stone-300 rounded-lg w-full p-2"
          type="text"
          placeholder="아이디"
        />
        <input type="text" placeholder="비밀번호" />
      </div>
    </form>
  );
}
