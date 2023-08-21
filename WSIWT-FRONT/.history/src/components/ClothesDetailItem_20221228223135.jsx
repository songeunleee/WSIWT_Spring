import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center m-2 bg-slate-500 w-2/6 rounded-md">
      <img className="w-20 h-20 p-2" src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </section>
  );
}
