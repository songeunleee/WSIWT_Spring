import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center m-2 p-1 bg-slate-500 w-2/6 rounded-md">
      <img className="w-20 h-20" src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </section>
  );
}
