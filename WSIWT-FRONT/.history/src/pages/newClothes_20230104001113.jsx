import React, { useRef, useState } from "react";
import Button from "../ui/Button";

export default function NewClothes() {
  const [file, setFile] = useState();
  const [main, setMain] = useState();
  const [middle, setMiddle] = useState();
  const [sub, setSub] = useState();
  const inputRef = useRef();
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
  };
  const ClickMiddle = (value) => {
    setMiddle(value);
  };
  const ClickSub = (value) => {
    setSub(value);
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
      { name: "jacket", display: "자켓" },
      { name: "shirt", display: "셔츠" },
      { name: "sleeveless", display: "민소매" },
      { name: "hoodie", display: "후드티" },
      { name: "short_sleeve", display: "반팔" },
      { name: "long_sleeve", display: "긴팔" },
    ],
    bottom: [
      { name: "short", display: "반바지" },
      { name: "pants", display: "긴바지" },
    ],
    dress: [{ name: "dress", display: "원피스" }],
    etc: [
      { name: "winter-hat", display: "겨울 모자" },
      { name: "muffler", display: "목도리" },
      { name: "gloves", display: "장갑" },
      { name: "black-tights", display: "검은색 스타킹" },
      { name: "skin-tights", display: "살색 스타킹" },
    ],
    sweater: [
      { name: "basic", display: "기본" },
      { name: "thin", display: "얇은" },
    ],
    jacket: [
      { name: "basic", display: "기본" },
      { name: "leather", display: "가죽 자켓" },
      { name: "thin", display: "얇은 자켓" },
    ],
    cardigan: [
      { name: "basic", display: "기본" },
      { name: "thin", display: "얇은 가디건" },
    ],
    long_sleeve: [
      { name: "basic", display: "기본" },
      { name: "thin", display: "얇은 긴팔" },
    ],
    shirt: [
      { name: "basic", display: "기본" },
      { name: "thin", display: "얇은 셔츠" },
      { name: "short", display: "반팔 셔츠" },
    ],
    dress: [{ name: "thin", display: "얇은 셔츠" }],
    hoodie: [
      { name: "basic", display: "기본" },
      { name: "fleece", display: "기모 후드티" },
    ],
    pants: [
      { name: "basic", display: "기본" },
      { name: "fleece", display: "기모 바지" },
      { name: "slacks", display: "슬랙스" },
      { name: "jeans", display: "청바지" },
    ],
    [{ name: "none", display: "항목이 없습니다." }]: paddedCoat,
    winter_hat,
    muffler,
    gloves,
    coat,
    trench_coat,
    black_tights,
    skin_tights,
    blouse,
    sleeveless,
    short_sleeve,
    shorts,
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
          <Button text={"사진 등록"} onClick={handleClick}></Button>
          <div className="pl-2 text-sm">*필수 x</div>
          <input
            ref={inputRef}
            className="hidden"
            type="file"
            name="file"
            onChange={handleChange}
          />
        </div>
        {categoryList["main_list"].map((item) => (
          <div key={item.name} onClick={() => ClickMain(item.name)}>
            {item.display}
          </div>
        ))}
        {main &&
          categoryList[main].map((item) => (
            <div key={item.name} onClick={() => ClickMiddle(item.name)}>
              {item.display}
            </div>
          ))}
        {middle &&
          categoryList[middle].map((item) => (
            <div key={item.name} onClick={() => ClickSub(item.name)}>
              {item.display}
            </div>
          ))}
      </form>
    </section>
  );
}
