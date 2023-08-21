import { read, utils } from "xlsx";
import XLSX from "xlsx";
import axios from "axios";

export async function getRegion(latitude, longitude) {
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${longitude}&y=${latitude}`,
    {
      headers: { Authorization: "826ad2f2f2a32ef0aebdbfe58a8f4bb9" },
    }
  );
  console.log(res);
}
