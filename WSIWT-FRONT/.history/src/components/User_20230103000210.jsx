import React from "react";

export default function User({ user }) {
  return (
    <div className="flex items-center pr-2">
      <img
        className="w-10 h-10 rounded-full"
        src={user.photoURL}
        alt={user.displayName}
      />
      <div className="hidden md:block">{user.displayName}</div>
    </div>
  );
}
