import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await await await fetch("xlsx/rigon.xlsx");
  var wb = read(f);
  console.log(f);
}
