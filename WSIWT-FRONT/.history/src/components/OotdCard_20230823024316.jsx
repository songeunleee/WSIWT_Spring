import React from "react";

export default function OotdCard({ imgURL }) {
  return (
    <section className="border">
      <img src={imgURL} alt="" />
    </section>
  );
}
