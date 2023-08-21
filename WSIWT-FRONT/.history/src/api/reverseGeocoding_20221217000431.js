import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await await fetch("public/xlsx/rigon.xlsx");
  // var wb = read(f);
  console.log(f);
}
