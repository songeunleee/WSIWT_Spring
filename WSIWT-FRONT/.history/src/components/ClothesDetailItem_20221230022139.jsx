import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center p-2 bg-color3   rounded-3xl">
      <img
        className="w-16 h-16 p-2 bg-color4 rounded-2xl"
        src={item.image}
        alt={item.name}
      />
      <p className="px-4 text-lg md:text-base w-full">{item.name}</p>
    </section>
  );
}
