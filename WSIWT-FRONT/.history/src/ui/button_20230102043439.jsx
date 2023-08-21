import React from "react";

export default function Button({ name }) {
  return (
    <button className="bg-color1 text-2xl text-white rounded-sm <Link
    to="/"
    className="flex items-center justify-center font-bold bg-color text-3xl p-5 "
  >
    <img className="w-12 mr-2" src="images/logo.png" alt="" />
    <div>WSIWT</div>
  </Link> p-2 px-4 text-grey">
      {name}
    </button>
  );
}
