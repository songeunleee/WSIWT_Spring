import { read, utils } from "xlsx";
import XLSX from "xlsx";
import axios from "axios";

export async function getRegion(longitude, latitude) {
  console.log(latitude);
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?`,
    {
      params: {
        x: longitude,
        y: latitude,
      },
      headers: { Authorization: `KakaoAK 826ad2f2f2a32ef0aebdbfe58a8f4bb9` },
    }
  );

  return res.data.documents[0].adress_name;
}
