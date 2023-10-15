import React, { useRef, useState } from "react";
import { updateOOTD } from "../api/database";
import { useAuthContext } from "../context/AuthContext";
import { uploadImage } from "../api/uploader";
import { useLocation, useNavigate } from "react-router-dom";
import useOotd from "../hooks/useOotd";

export default function UpdateOotd() {
  const [file, setFile] = useState();
  const [content, setContent] = useState();
  const { updateOotd } = useOotd();
  const navigate = useNavigate();
  const location = useLocation();
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

    file
      ? uploadImage(file).then((url) => {
          updateOotd.mutate(
            {
              id: location.state.id,
              ootdUpdateDotd: {
                url: url,
                content: content || location.state.content,
              },
            },
            { onSuccess: () => navigate("/ootd") }
          );
        })
      : updateOOTD(location.state.id, {
          url: location.state.imgUrl,
          content: content,
        }).then(navigator("/ootd"));

    console.log(location.state.url, content);
  };

  return (
    <section>
      <form className="flex flex-col">
        <div className="flex flex-col justify-center mb-3 items-center">
          <img
            className="w-40 mx-auto mb-5"
            src={file ? URL.createObjectURL(file) : location.state.imgUrl}
            alt=""
          />

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
          defaultValue={location && location.state.content}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>등록</button>
      </form>
    </section>
  );
}
