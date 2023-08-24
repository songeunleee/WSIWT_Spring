import React, { useRef, useState } from "react";

export default function NewOotd() {
  const [file, setFile] = useState();

  const inputRef = useRef();
  const nameRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
  };
  return (
    <section>
      <form className="flex flex-col">
        <div className="flex flex-col justify-center mb-3 items-center">
          {file && (
            <img
              className="w-40 mx-auto mb-5"
              src={URL.createObjectURL(file)}
              alt=""
            />
          )}
          <div
            className=" bg-color4 text-white cursor-pointer rounded-sm hover:brightness-110 p-2 px-4 text-grey"
            onClick={handleClick}
          >
            사진 등록
          </div>

          <input
            ref={inputRef}
            className="hidden"
            type="file"
            name="file"
            required
            onChange={handleChange}
          />
        </div>
        <input
          required
          className="border-2 border-color3 p-1 px-2 rounded-sm h-40 outline-none"
          type="text"
          placeholder="TEXT"
        />
      </form>
    </section>
  );
}
