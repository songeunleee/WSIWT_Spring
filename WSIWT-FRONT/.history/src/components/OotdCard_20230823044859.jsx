import React from "react";
import Comment from "./Comment";
import Comments from "./Comments";
import User from "./User";

export default function OotdCard() {
  return (
    <section className="flex flex-col justify-center items-center   rounded-xl bg-color3 py-5 mb-3">
      <img className=" bg-black w-11/12 " src="images/hoodie.png" alt="" />

      <div className=" border border-color4 text-left w-11/12">
        <User user={{ photoURL: "images/coat.png", displayName: "w" }} />
        오늘 비가 많이 오네용
      </div>
      <Comments />
    </section>
  );
}
