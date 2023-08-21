import { read, utils } from "xlsx";
import XLSX from "xlsx";
import axios from "axios";

export async function getRegion(latitude, longitude) {
  const res = await axios.get(
    "https://dapi.kakao.com/v2/local/geo/transcoord.json",
    {
      paras: { x: longitude, y: latitude },
      headers: { Authorization: "8d11a73c7147b610701472193be00281" },
    }
  );
  console.log(res);
}
