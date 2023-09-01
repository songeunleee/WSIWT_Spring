import React from "react";
import Comment from "./Comment";

export default function OotdCard() {
  return (
    <section className="flex flex-row-reverse justify-center  rounded-xl bg-color3 p-2">
      <img className=" bg-black w-11/12 " src="images/hoodie.png" alt="" />
      <Comment />
    </section>
  );
}