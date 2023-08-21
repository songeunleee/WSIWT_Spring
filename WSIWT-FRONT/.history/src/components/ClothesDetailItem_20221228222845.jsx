import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section>
      <img className="w-20 h-18" src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </section>
  );
}
