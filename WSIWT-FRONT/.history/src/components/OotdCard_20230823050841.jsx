import React from "react";
import Comment from "./Comment";
import Comments from "./Comments";
import User from "./User";
import { BsFillTrashFill } from "react-icons/bs";
import { HiPencilSquare } from "react-icons/hi2";

export default function OotdCard() {
  return (
    <section className="flex flex-col justify-center items-center   rounded-xl bg-color3 py-5 mb-3">
      <img className=" bg-black w-11/12 " src="images/hoodie.png" alt="" />

      <div className="  border-l border-b border-r rounded-b-xl p-3 border-color4 text-left w-11/12">
        <div className="flex justify-between">
          <User
            user={{ photoURL: "images/winter_hat.png", displayName: "helo" }}
          />
          <div className="flex gap-1.5">
            <button>
              <HiPencilSquare />
            </button>
            <button>
              <BsFillTrashFill />
            </button>
          </div>
        </div>
        <div className="mt-1">오늘 비가 많이 오네용</div>
      </div>
      <Comments />
    </section>
  );
}
