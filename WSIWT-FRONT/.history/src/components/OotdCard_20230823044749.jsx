import React from "react";
import Comment from "./Comment";
import Comments from "./Comments";
import User from "./User";

export default function OotdCard() {
  return (
    <section className="flex flex-col justify-center items-center   rounded-xl bg-color3 py-5 mb-3">
      <div className="w-11/12">
        <img className=" bg-black  " src="images/hoodie.png" alt="" />
      </div>
      <div className="self-start ">
        <User user={{ photoURL: "images/coat.png", displayName: "w" }} />
      </div>

      <div className=" border border-color4 text-left w-11/12">
        오늘 비가 많이 오네용
      </div>
      <Comments />
    </section>
  );
}
