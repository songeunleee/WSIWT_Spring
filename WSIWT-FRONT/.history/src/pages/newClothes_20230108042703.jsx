import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { addNewClothes } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Category from "../components/Category";
import CategoryItem from "../components/CategoryItem";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";
import { setType } from "../util/getValue";

export default function NewClothes() {
  const { isLoading, error, data } = useQuery(["public"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json();
  });
  const categoryList = data && data.categoryList;

  const queryclient = useQueryClient();
  const [file, setFile] = useState();
  const [main, setMain] = useState();
  const [middle, setMiddle] = useState();
  const [sub, setSub] = useState();
  const [display, setDisplay] = useState();
  const [success, setSuccess] = useState(false);
  const inputRef = useRef();
  const nameRef = useRef();
  const { user, uid } = useAuthContext();

  const handleClick = () => {
    inputRef.current.click();
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
  };
  console.log();
  const ClickMain = (value) => {
    setMain(value);
    setMiddle();
    setSub();
  };
  const ClickMiddle = (value, display) => {
    setMiddle(value);
    setDisplay(display);
    setSub();
  };
  const ClickSub = (value, display) => {
    setSub(value);
    setDisplay((prev) => (display === "기본" ? prev : display));
  };

  const handleSubit = (e) => {
    e.preventDefault();
    if (main === undefined || middle === undefined) {
      console.log("항목을 선택하세요");
    } else {
      const newClothes = {
        id: Date.now(),
        type: setType(middle, sub),
        main,
        middle,
        sub: sub ? sub : "",
        name: nameRef.current.value,
        category: display,
      };
      file
        ? uploadImage(file).then((url) =>
            addNewClothes(newClothes, url, user.uid)
          )
        : addNewClothes(newClothes, "", user.uid);
      setSuccess(true);
      setMain();
      setMiddle();
      setFile();
      nameRef.current.value = "";
      queryclient.invalidateQueries(["myCloset", uid]);
    }
  };

  return (
    <section onSubmit={handleSubit} className=" text-center mx-2">
      <h2 className="text-2xl font-bold p-3">옷장에 추가!</h2>
      {success && <h3 className="pb-3"> 👌 옷장에 넣기를 완료하였습니다!</h3>}
      {file && (
        <img
          className="w-40 mx-auto mb-5"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="flex flex-col">
        <div className="flex justify-center mb-3 items-center">
          <div
            className=" bg-color1 text-white cursor-pointer rounded-sm hover:brightness-110 p-2 px-4 text-grey"
            onClick={handleClick}
          >
            사진 등록
          </div>
          <div className=" pl-2 text-sm">* 필수 아님</div>
          <input
            ref={inputRef}
            className="hidden"
            type="file"
            name="file"
            onChange={handleChange}
          />
        </div>
        <input
          required
          className="border-2 border-color1 p-1 px-2 rounded-sm"
          type="text"
          placeholder="옷을 구별할 이름"
          ref={nameRef}
        />

        <Category />
        <Button text={"옷장에 넣기"} />
      </form>
    </section>
  );
}
