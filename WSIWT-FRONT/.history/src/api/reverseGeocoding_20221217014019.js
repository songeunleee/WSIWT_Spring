import { read, utils } from "xlsx";
import XLSX from "xlsx";
import axios from "axios";

export async function getRegion(latitude, longitude) {
  axios.get("https://dapi.kakao.com/v2/local/geo/transcoord.json", {
    paras: { x: longitude, y: latitude },
  });
}
