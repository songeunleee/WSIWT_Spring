import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center">
      <img className="w-20 h-20" src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </section>
  );
}
