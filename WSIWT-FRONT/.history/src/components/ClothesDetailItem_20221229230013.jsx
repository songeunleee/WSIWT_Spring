import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center mb-1 mx-2  p-2 bg-slate-400 rounded-md">
      <img
        className="w-16 h-16 p-2 bg-slate-500 rounded-lg"
        src={item.image}
        alt={item.name}
      />
      <p className="px-2">{item.name}</p>
    </section>
  );
}
