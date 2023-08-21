import React from "react";

export default function User({ user }) {
  return (
    <div>
      <img src={user.photoURL} alt={user.displayName} />
      <div>{user.displayName}</div>
    </div>
  );
}
