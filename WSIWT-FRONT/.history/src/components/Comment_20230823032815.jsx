import React from "react";

export default function Comment({ content }) {
  return (
    <section className="p-1 px-3">
      <div>{content}</div>
    </section>
  );
}
