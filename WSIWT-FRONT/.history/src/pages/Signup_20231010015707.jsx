import React from "react";

export default function Signup() {
  return (
    <section>
      <form action="">
        <div className="flex">
          <input type="text" placeholder="아이디" />
          <input type="text" placeholder="비밀번호" />
        </div>
        <button>회원가입</button>
      </form>
    </section>
  );
}
