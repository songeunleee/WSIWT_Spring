import React, { useState } from "react";

export default function NewClothes() {
  const [file, setFile] = useState();
  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold">새로운 옷 등록</h2>
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
    </section>
  );
}
