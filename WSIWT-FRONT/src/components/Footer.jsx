import React, { useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((pre) => !pre);
  };
  return (
    <footer className="flex flex-col items-center">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => handleClick()}
      >
        ©
      </div>
      {show && <div className="flex flex-col items-center">
      <a href="https://www.flaticon.com/free-icons/hanger" title="hanger icons">
        Hanger icons created by Freepik - Flaticon
      </a>
      {/*로고 옷걸이*/}
      <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">
        Sun icons created by Freepik - Flaticon
      </a>
      {/*해*/}
      <a
        href="https://www.flaticon.com/free-icons/miscellaneous"
        title="miscellaneous icons"
      >
        Miscellaneous icons created by Freepik - Flaticon
      </a>
      {/*달*/}
      <a
        href="https://www.flaticon.com/free-icons/cloudy-night"
        title="cloudy night icons"
      >
        Cloudy night icons created by Freepik - Flaticon
      </a>
      {/*부분적흐림 달*/}
      <a
        href="https://www.flaticon.com/free-icons/cloudy-day"
        title="cloudy day icons"
      >
        Cloudy day icons created by Freepik - Flaticon
      </a>
      {/*부분적 흐림 해 */}
      <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">
        Rain icons created by Freepik - Flaticon
      </a>
      <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">
        Rain icons created by Freepik - Flaticon
      </a>
      {/*비 + 눈, 흐림 이 아이콘에서 수정*/}
      <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">
        Rain icons created by Freepik - Flaticon
      </a>
      {/*소나기*/}
      <a
        href="https://www.flaticon.com/free-icons/snowflake"
        title="snowflake icons"
      >
        Snowflake icons created by Freepik - Flaticon
      </a>
      {/*눈*/}
      <a
        href="https://www.flaticon.com/free-icons/pantyhose"
        title="pantyhose icons"
      >
        Pantyhose icons created by Freepik - Flaticon
      </a>
      {/*검정스타킹*/}
      <a href="https://www.flaticon.com/free-icons/blouse" title="blouse icons">
        Blouse icons created by Freepik - Flaticon
      </a>
      {/*블라우스*/}
      <a
        href="https://www.flaticon.com/free-icons/cardigan"
        title="cardigan icons"
      >
        Cardigan icons created by Freepik - Flaticon
      </a>
      {/*가디건 사진 수정하기*/}
      <a
        href="https://www.flaticon.com/free-icons/trench-coat"
        title="trench coat icons"
      >
        Trench coat icons created by Freepik - Flaticon
      </a>
      {/*코트*/}
      <a href="https://www.flaticon.com/free-icons/hoodie" title="hoodie icons">
        Hoodie icons created by Freepik - Flaticon
      </a>
      {/*후드*/}
      <a href="https://www.flaticon.com/free-icons/wool" title="wool icons">
        Wool icons created by Freepik - Flaticon
      </a>
      {/*기모 표시*/}
      <a
        href="https://www.flaticon.com/free-icons/trousers"
        title="trousers icons"
      >
        Trousers icons created by iconixar - Flaticon
      </a>
      {/*바지*/}
      <a href="https://www.flaticon.com/free-icons/gloves" title="gloves icons">
        Gloves icons created by Freepik - Flaticon
      </a>
      {/*장갑*/}
      <a href="https://www.flaticon.com/free-icons/blazer" title="blazer icons">
        Blazer icons created by iconixar - Flaticon
      </a>
      {/*자켓*/}
      <a href="https://www.flaticon.com/free-icons/jeans" title="jeans icons">
        Jeans icons created by Freepik - Flaticon
      </a>
      {/*청바지*/}
      <a href="https://www.flaticon.com/free-icons/jacket" title="jacket icons">
        Jacket icons created by Freepik - Flaticon
      </a>
      {/*가죽자켓*/}
      <a
        href="https://www.flaticon.com/free-icons/garment"
        title="garment icons"
      >
        Garment icons created by Freepik - Flaticon
      </a>
      {/*긴팔*/}
      <a
        href="https://www.flaticon.com/free-icons/muffler"
        title="muffler icons"
      >
        Muffler icons created by IconBaandar - Flaticon
      </a>
      {/*머플러*/}
      <a href="https://www.flaticon.com/free-icons/jacket" title="jacket icons">
        Jacket icons created by Freepik - Flaticon
      </a>
      {/*패딩*/}
      <a href="https://www.flaticon.com/free-icons/shirt" title="shirt icons">
        Shirt icons created by monkik - Flaticon
      </a>
      {/*셔츠*/}
      <a
        href="https://www.flaticon.com/free-icons/short-sleeves"
        title="short sleeves icons"
      >
        Short sleeves icons created by Freepik - Flaticon
      </a>
      {/*반팔 셔츠*/}
      <a href="https://www.flaticon.com/free-icons/skirt" title="skirt icons">
        Skirt icons created by Smashicons - Flaticon
      </a>
      {/*치마*/}
      <a
        href="https://www.flaticon.com/free-icons/clothes"
        title="clothes icons"
      >
        Clothes icons created by Freepik - Flaticon
      </a>
      {/*반팔*/}
      <a href="https://www.flaticon.com/free-icons/pants" title="pants icons">
        Pants icons created by Freepik - Flaticon
      </a>
      {/*반바지*/}
      <a
        href="https://www.flaticon.com/free-icons/clothes"
        title="clothes icons"
      >
        Clothes icons created by AmethystDesign - Flaticon
      </a>
      {/*슬랙스*/}
      <a
        href="https://www.flaticon.com/free-icons/tank-top"
        title="tank-top icons"
      >
        Tank-top icons created by Freepik - Flaticon
      </a>
      {/*민소매*/}
      <a
        href="https://www.flaticon.com/free-icons/sweater"
        title="sweater icons"
      >
        Sweater icons created by ultimatearm - Flaticon
      </a>
      {/*니트*/}
      <a href="https://www.flaticon.com/free-icons/dress" title="dress icons">
        Dress icons created by Freepik - Flaticon
      </a>
      {/*얇은 원피스*/}
      <a
        href="https://www.flaticon.com/free-icons/cardigan"
        title="cardigan icons"
      >
        Cardigan icons created by Victoruler - Flaticon
      </a>
      {/*얆은 가디건*/}
      <a
        href="https://www.flaticon.com/free-icons/fashion"
        title="fashion icons"
      >
        Fashion icons created by Freepik - Flaticon
      </a>
      {/*트렌치코트*/}
      <a href="https://www.flaticon.com/free-icons/hat" title="hat icons">
        Hat icons created by Freepik - Flaticon
      </a>
      {/*겨울모자*/}
      <a href="https://www.flaticon.com/free-icons/user" title="user icons">
        User icons created by Becris - Flaticon
      </a>
      {/*기본유저이미지*/}
      <a
        href="https://www.flaticon.com/free-icons/weather"
        title="weather icons"
      >
        Weather icons created by Freepik - Flaticon
      </a>
      {/*로고*/}

      </div>}
          </footer>
  );
}
