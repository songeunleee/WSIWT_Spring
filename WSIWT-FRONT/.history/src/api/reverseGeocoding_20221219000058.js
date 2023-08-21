import axios from "axios";

export async function getRegion(longitude, latitude) {
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?`,
    {
      params: {
        x: longitude,
        y: latitude,
      },
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO}` },
    }
  );

  return res.data.documents[0].address_name;
}
