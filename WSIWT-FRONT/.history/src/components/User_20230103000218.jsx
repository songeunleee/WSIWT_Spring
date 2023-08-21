import React from "react";

export default function User({ user }) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full pr-2"
        src={user.photoURL}
        alt={user.displayName}
      />
      <div className="hidden md:block">{user.displayName}</div>
    </div>
  );
}
