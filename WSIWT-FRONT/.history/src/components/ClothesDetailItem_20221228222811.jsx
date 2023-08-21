import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section>
      <img className="w-10 h-10" src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </section>
  );
}
