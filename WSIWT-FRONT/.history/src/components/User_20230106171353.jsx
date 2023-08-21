import React from "react";

export default function User({ user }) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full shrink-1"
        src={user.photoURL}
        alt={user.displayName}
      />
      <div className="hidden md:block ml-2">{user.displayName}</div>
    </div>
  );
}
