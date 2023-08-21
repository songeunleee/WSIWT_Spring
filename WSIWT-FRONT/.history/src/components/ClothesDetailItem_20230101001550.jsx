import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center p-2 bg-color3 rounded-3xl">
      <img
        className="w-14 h-14 p-2 bg-color4 rounded-2xl"
        src={item.image}
        alt={item.name}
      />
      <p className="px-4 text-lg xs:text-base sm:text-base font-semi-bold w-full truncate ... text-color4 ">
        {item.name}
      </p>
    </section>
  );
}
