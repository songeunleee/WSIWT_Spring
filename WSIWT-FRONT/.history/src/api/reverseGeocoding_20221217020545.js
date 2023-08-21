import { read, utils } from "xlsx";
import XLSX from "xlsx";
import axios from "axios";

export async function getRegion(longitude, latitude) {
  console.log(latitude);
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?`,
    {
      params: {
        x: 128.5849088,
        y: 38.1878272,
      },
      headers: { Authorization: `KakaoAK 826ad2f2f2a32ef0aebdbfe58a8f4bb9` },
    }
  );
  console.log(res);
  return res;
}
