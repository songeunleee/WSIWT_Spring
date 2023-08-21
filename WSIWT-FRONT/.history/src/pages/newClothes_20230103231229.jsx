import React, { useRef, useState } from "react";
import Button from "../ui/Button";

export default function NewClothes() {
  const [file, setFile] = useState();
  const [main, setMain] = useState("outer");
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
  console.log(main);
  const ClickCategory = (value, cat) => {
    cat.concat(value);
    setMain(value + cat);
  };
  const Main = [
    { name: "outer", display: "아우터" },
    { name: "top", display: "상의" },
    { name: "bottom", display: "하의" },
    { name: "dress", display: "원피스" },
    { name: "etc", display: "기타" },
  ];
  const outerMiddle = [
    { name: "paddedCoat", display: "패딩" },
    { name: "coat", display: "코트" },
    { name: "jacket", display: "자켓" },
    { name: "trench-coat", display: "트렌치 코트" },
    { name: "cardigan", display: "가디건" },
  ];
  const topMiddle = [
    { name: "sweater", display: "니트" },
    { name: "blouse", display: "블라우스" },
    { name: "jacket", display: "자켓" },
    { name: "shirt", display: "셔츠" },
    { name: "sleeveless", display: "민소매" },
    { name: "hoodie", display: "후드티" },
    { name: "short-sleeve", display: "반팔" },
    { name: "long-sleeve", display: "긴팔" },
  ];

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
        {Main.map((item) => (
          <div
            key={item.name}
            onClick={() => ClickCategory(item.name, "Middle")}
          >
            {item.display}
          </div>
        ))}
        {/* {main &&
          `${main}_Middle`.map((item) => (
            <div key={item.name} onClick={() => ClickCategory(item.name)}>
              {item.display}
            </div>
          ))} */}
      </form>
    </section>
  );
}
