import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center p-2 border-color2 border-4  rounded-md">
      <img
        className="w-16 h-16 p-2 bg-color1 rounded-md"
        src={item.image}
        alt={item.name}
      />
      <p className="px-2">{item.name}</p>
    </section>
  );
}
