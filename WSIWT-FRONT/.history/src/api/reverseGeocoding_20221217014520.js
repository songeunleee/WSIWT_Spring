import { read, utils } from "xlsx";
import XLSX from "xlsx";
import axios from "axios";

export async function getRegion(latitude, longitude) {
  const res = await axios.get(
    "https://dapi.kakao.com/v2/local/geo/transcoord.json",
    {
      paras: { x: longitude, y: latitude },
      headers: { Authorization: "0bb1d59d26d1b4afcdd88ad92c7aa0df" },
    }
  );
  console.log(res);
}
