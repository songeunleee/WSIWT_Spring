import React, { useState } from "react";
import Button from "../ui/Button";

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
      <form>
        <div className="flex justify-center items-center">
          <Button text={"사진"} />
          <div className="pl-2">*필수 아님</div>
          <input className="hidden" type="file" accept="image/*" name="file" />
        </div>
      </form>
    </section>
  );
}
