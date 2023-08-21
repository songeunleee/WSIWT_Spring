import React, { useRef, useState } from "react";
import Button from "../ui/Button";

export default function NewClothes() {
  const [file, setFile] = useState();
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      console.log(e);
    }
  };
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
          <Button onClick={handleClick} text={"사진 등록"} />
          <div className="pl-2 text-sm">*필수 x</div>
          <input
            ref={inputRef}
            className="hidden"
            type="file"
            accept="image/*"
            name="file"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}
