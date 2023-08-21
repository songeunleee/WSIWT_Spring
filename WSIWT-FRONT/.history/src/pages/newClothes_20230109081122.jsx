import { useQuery, useQueryClient } from "@tanstack/react-query";
import { set } from "firebase/database";
import React, { useRef, useState } from "react";
import { addNewClothes } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import CategoryItem from "../components/CategoryItem";
import { useAuthContext } from "../context/AuthContext";
import usePublic from "../hooks/usePublic";
import Button from "../ui/Button";
import { setType } from "../util/getValue";

export default function NewClothes() {
  // const { data } = useQuery(["public"], async () => {
  //   const res = await fetch("../data/data.json");
  //   return res.json();
  // });
  // const categoryList = data && data.categoryList;

  const { categoryList } = usePublic();

  const queryclient = useQueryClient();
  const [file, setFile] = useState();
  const [division, setDivision] = useState({ main: "", middle: "", sub: "" });
  const [display, setDisplay] = useState();
  const [success, setSuccess] = useState(false);
  const inputRef = useRef();
  const nameRef = useRef();
  const { user, uid } = useAuthContext();

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
  console.log(division);

  const ClickMain = (value) => {
    setDivision({ main: value });
  };
  const ClickMiddle = (value, display) => {
    setDivision((pre) => ({
      ...pre,
      middle: value,
      sub: "",
      category: display,
    }));
    setDisplay(display);
  };
  const ClickSub = (value, display) => {
    setDivision((pre) => ({ ...pre, sub: value, category: display }));
    setDisplay((prev) => (display === "기본" ? prev : display));
  };

  const handleSubit = (e) => {
    e.preventDefault();
    if (division.main === undefined || division.middle === undefined) {
      console.log("항목을 선택하세요");
    } else {
      const newClothes = {
        id: Date.now(),
        type: setType(division.middle, division.sub),
        ...division,
        name: nameRef.current.value,
        category: display,
      };
      file
        ? uploadImage(file).then((url) =>
            addNewClothes(newClothes, url, user.uid)
          )
        : addNewClothes(newClothes, "", user.uid);
      setSuccess(true);
      setDivision({ main: "" });
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

        <div className="flex flex-col  bg-color2 rounded-md p-2 my-3">
          <div className="self-start text-xl font-bold text-color4 pl-1">
            CATEGORY
          </div>
          <div className="flex gap-1">
            <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
              {categoryList &&
                categoryList["main_list"].map((item) => (
                  <CategoryItem
                    key={item.name}
                    item={item}
                    clickCategory={ClickMain}
                    value={division.main}
                  />
                ))}
            </div>
            <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
              {division.main &&
                categoryList &&
                categoryList[division.main].map((item) => (
                  <CategoryItem
                    key={item.name}
                    item={item}
                    clickCategory={ClickMiddle}
                    value={division.middle}
                  />
                ))}
            </div>
            <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
              {division.middle &&
                categoryList &&
                categoryList[division.middle] &&
                categoryList[division.middle].map((item) => (
                  <CategoryItem
                    key={item.name}
                    item={item}
                    clickCategory={ClickSub}
                    value={division.sub}
                  />
                ))}
            </div>
          </div>
        </div>
        <Button text={"옷장에 넣기"} />
      </form>
    </section>
  );
}
