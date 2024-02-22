import React from "react";

export default function User({ user, nav }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-10 h-10 rounded-full "
        src={user.picture}
        alt={user.username}
      />
      <div className={nav ? "hidden md:block ml-2 font-bold" : "ml-2 font-bold"}>{user.username}</div>
    </div>
  );
}
