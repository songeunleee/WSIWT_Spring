import React from "react";
import Comment from "./Comment";
import Comments from "./Comments";
import User from "./User";
import { BsFillTrashFill } from "react-icons/bs";
import { HiPencilSquare } from "react-icons/hi2";
import { useAuthContext } from "../context/AuthContext";
import { deleteOOTD } from "../api/database";
import { useNavigate } from "react-router-dom";
import useOotd from "../hooks/useOotd";

export default function OotdCard({ ootd, onDelete }) {
  const { user } = useAuthContext();
  const { removeOotd } = useOotd();
  const navigation = useNavigate();
  const handleClickDelete = (id) => {
    //deleteOOTD(id).then(onDelete(id));
    removeOotd.mutate(id);
  };
  const handleClickUpdate = (ootd) => {
    navigation("/ootd/update", { state: ootd });
  };
  return (
    <section className="flex flex-col justify-center items-center   rounded-xl bg-color3 py-5 mb-3">
      <img className=" bg-black w-11/12 " src={ootd.imgUrl} alt="" />

      <div className="  border-l-2 border-b-2 border-r-2 rounded-b-xl p-3 border-color4 text-left w-11/12">
        <div className="flex justify-between">
          <User
            user={{
              picture: "images/winter_hat.png",
              username: ootd.author,
            }}
          />
          {user && && user.username === ootd.author && (
            <div className="flex gap-1.5">
              <button onClick={() => handleClickUpdate(ootd)}>
                <HiPencilSquare />
              </button>
              <button onClick={() => handleClickDelete(ootd.id)}>
                <BsFillTrashFill />
              </button>
            </div>
          )}
        </div>
        <div className="mt-1">{ootd.content}</div>
      </div>

      <Comments ootdId={ootd.id} comments={ootd.comments} />
    </section>
  );
}
