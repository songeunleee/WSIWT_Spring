import React from "react";

export default function User({ user }) {
  return (
    <div>
      <img className="w-10 h-10" src={user.photoURL} alt={user.displayName} />
      <div>{user.displayName}</div>
    </div>
  );
}
