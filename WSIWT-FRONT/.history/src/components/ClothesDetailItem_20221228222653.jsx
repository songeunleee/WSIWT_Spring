import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section>
      <img src={item.image} />
    </section>
  );
}
