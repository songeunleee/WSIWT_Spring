import React from "react";
import User from "./User";

export default function Comment({ content }) {
  return (
    <section className="flex items-center p-1 px-3">
      <User user={{ photoURL: "images/coat.png", displayName: "이송은" }} />
      <div>{content}</div>
    </section>
  );
}
