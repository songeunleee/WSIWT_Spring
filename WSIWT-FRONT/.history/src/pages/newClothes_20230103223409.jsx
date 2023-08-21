import React, { useRef, useState } from "react";
import Button from "../ui/Button";

export default function NewClothes() {
  const [file, setFile] = useState();
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleChange = (e) => {
    console.log(e);
  };

  const onClick = () => {
    inputRef.current.click();
  };
  const onChange = (event) => {
    console.log(event);
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
        <div onClick={onClick}>
          <input
            ref={inputRef}
            className="hidden"
            type="file"
            accept="image/*"
            name="file"
            onChange={onChange}
          />
          <div
            onClick={onClick}
            className="p-3 bg-black"
            src="./images/plus (4).png"
            alt=""
          />
        </div>
      </form>
    </section>
  );
}
