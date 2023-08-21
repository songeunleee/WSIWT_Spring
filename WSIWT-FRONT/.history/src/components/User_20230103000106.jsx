import React from "react";

export default function User({ user }) {
  return (
    <div>
      <img
        className="w-10 h-10 rounded-full"
        src={user.photoURL}
        alt={user.displayName}
      />
      <div>{user.displayName}</div>
    </div>
  );
}
