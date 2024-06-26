import React, { useRef, useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { uploadImage } from "../api/uploader";
import { useLocation, useNavigate } from "react-router-dom";
import useOotd from "../hooks/useOotd";

export default function NewOotd() {
  const [file, setFile] = useState();
  const [content, setContent] = useState();
  const { user } = useAuthContext();
  const { addOotd } = useOotd();

  const navigate = useNavigate();

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("사진을 등록해 주세요");
    } else {
      uploadImage(file).then((url) => {
        addOotd.mutate(
          { url: url, content: content, author: user.username },
          { onSuccess: () => navigate("/ootd") }
        );
      });
    }
  };

  return (
    <section className="p-2">
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
          className="border-2 border-color3 p-1 px-2 rounded-sm h-40 outline-none"
          type="text"
          placeholder="TEXT"
          name="text"
          onChange={handleChange}
        />
        <button
          className={
            "mt-2 bg-color4 text-white cursor-pointer rounded-sm hover:brightness-110 p-2 px-4 text-grey"
          }
          onClick={handleSubmit}
        >
          등록
        </button>
      </form>
    </section>
  );
}
