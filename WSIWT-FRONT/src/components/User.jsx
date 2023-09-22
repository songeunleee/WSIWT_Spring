import React from "react";

export default function User({ user }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-10 h-10 rounded-full "
        src={user.picture}
        alt={user.name}
      />
      <div className="hidden md:block ml-2 font-bold">{user.name}</div>
    </div>
  );
}
