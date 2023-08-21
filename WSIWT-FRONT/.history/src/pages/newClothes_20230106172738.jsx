import { QueryClient, useQueryClient } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { addNewClothes } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import CategoryItem from "../components/CategoryItem";
import { useAuthContext } from "../context/AuthContext";
import Button from "../ui/Button";
import { setType } from "../util/getValue";

export default function NewClothes() {
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

  const categoryList = {
    main_list: [
      { name: "outer", display: "아우터" },
      { name: "top", display: "상의" },
      { name: "bottom", display: "하의" },
      { name: "dress", display: "원피스" },
      { name: "etc", display: "기타" },
    ],
    outer: [
      { name: "paddedCoat", display: "패딩" },
      { name: "coat", display: "코트" },
      { name: "jacket", display: "자켓" },
      { name: "trench_coat", display: "트렌치 코트" },
      { name: "cardigan", display: "가디건" },
    ],
    top: [
      { name: "sweater", display: "니트" },
      { name: "blouse", display: "블라우스" },
      { name: "hoodie", display: "후드티" },
      { name: "shirt", display: "셔츠" },
      { name: "long_sleeve", display: "긴팔" },
      { name: "short_sleeve", display: "반팔" },
      { name: "sleeveless", display: "민소매" },
    ],
    bottom: [
      { name: "pants", display: "긴바지" },
      { name: "short", display: "반바지" },
    ],
    dress: [{ name: "dress", display: "원피스" }],
    etc: [
      { name: "winter_hat", display: "겨울 모자" },
      { name: "muffler", display: "목도리" },
      { name: "gloves", display: "장갑" },
      { name: "black_tights", display: "검은색 스타킹" },
      { name: "skin_tights", display: "살색 스타킹" },
    ],
    sweater: [
      { name: "none", display: "기본" },
      { name: "thin", display: "얇은 니트" },
    ],
    jacket: [
      { name: "none", display: "기본" },
      { name: "leather", display: "가죽 자켓" },
      { name: "thin", display: "얇은 자켓" },
    ],
    cardigan: [
      { name: "none", display: "기본" },
      { name: "thin", display: "얇은 가디건" },
    ],
    long_sleeve: [
      { name: "none", display: "기본" },
      { name: "thin", display: "얇은 긴팔" },
    ],
    shirt: [
      { name: "none", display: "기본" },
      { name: "thin", display: "얇은 셔츠" },
      { name: "short", display: "반팔 셔츠" },
    ],
    dress: [{ name: "thin_dress", display: "얇은 원피스" }],
    hoodie: [
      { name: "none", display: "기본" },
      { name: "fleece_lined", display: "기모 후드티" },
    ],
    pants: [
      { name: "none", display: "기본" },
      { name: "fleece_lined", display: "기모 바지" },
      { name: "slacks", display: "슬랙스" },
      { name: "jeans", display: "청바지" },
    ],
    // paddedCoat: [{ name: "none1", display: null }],
    // winter_hat: [{ name: "none2", display: null }],
    // muffler: [{ name: "none3", display: null }],
    // gloves: [{ name: "none4", display: null }],
    // coat: [{ name: "none5", display: null }],
    // trench_coat: [{ name: "none6", display: null }],
    // black_tights: [{ name: "none7", display: null }],
    // skin_tights: [{ name: "none8", display: null }],
    // blouse: [{ name: "none9", display: null }],
    // sleeveless: [{ name: "none10", display: null }],
    // short_sleeve: [{ name: "none11", display: null }],
    // shorst: [{ name: "none12", display: null }],
    // thin_dress: [{ name: "none13", display: null }],
  };

  return (
    <section onSubmit={handleSubit} className="w-full text-center mx-1">
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
              {categoryList["main_list"].map((item) => (
                <CategoryItem
                  key={item.name}
                  item={item}
                  clickCategory={ClickMain}
                  value={main}
                />
              ))}
            </div>
            <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
              {main &&
                categoryList[main].map((item) => (
                  <CategoryItem
                    key={item.name}
                    item={item}
                    clickCategory={ClickMiddle}
                    value={middle}
                  />
                ))}
            </div>
            <div className="flex flex-1 flex-col border-2 border-dashed border-color4 rounded-md">
              {middle &&
                categoryList[middle] &&
                categoryList[middle].map((item) => (
                  <CategoryItem
                    key={item.name}
                    item={item}
                    clickCategory={ClickSub}
                    value={sub}
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
