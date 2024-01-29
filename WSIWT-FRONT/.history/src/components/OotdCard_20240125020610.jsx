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
import { publishedAt } from "../util/getValue";

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
  console.log(ootd);
  return (
    <section className="flex flex-col justify-center items-center   rounded-xl bg-color3 py-5 mb-3">
      <img className=" bg-black w-11/12 " src={ootd.imgUrl} alt="" />

      <div className="  border-l-2 border-b-2 border-r-2 rounded-b-xl p-3 border-color4 text-left w-11/12">
        <div className="flex  items-center">
          <User
            user={{
              picture: ootd.author.picture,
              username: ootd.author.username,
            }}
          />
          {user && user.username === ootd.author.username && (
            <div className="flex gap-1.5  items-center">
              <button onClick={() => handleClickUpdate(ootd)}>
                <HiPencilSquare />
              </button>
              <button onClick={() => handleClickDelete(ootd.id)}>
                <BsFillTrashFill />
              </button>
            </div>
          )}
          <div className="text-neutral-700 font-bold text-sm">
            {ootd.createdAt === ootd.updatedAt
              ? publishedAt(ootd.createdAt, "")
              : publishedAt(ootd.updatedAt, " (수정됨)")}
          </div>
        </div>
        <div className="mt-1">{ootd.content}</div>
      </div>

      <Comments ootdId={ootd.id} comments={ootd.comments} />
    </section>
  );
}
