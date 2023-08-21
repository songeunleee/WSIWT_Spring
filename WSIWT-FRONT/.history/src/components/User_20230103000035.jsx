import React from "react";

export default function User({ user }) {
  return (
    <div>
      <img src={user.photoURL} alt="" />
      <div>{user.displayName}</div>
    </div>
  );
}
