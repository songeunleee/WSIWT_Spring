import React from "react";
import Comment from "./Comment";
import Comments from "./Comments";

export default function OotdCard() {
  return (
    <section className="flex flex-col justify-center items-center   rounded-xl bg-color3 py-5 mb-3">
      <img className=" bg-black w-11/12 " src="images/hoodie.png" alt="" />

      <Comments />
    </section>
  );
}
