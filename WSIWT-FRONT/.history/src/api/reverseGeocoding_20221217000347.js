import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await (await fetch("public/xlsx/rigion.xlsx")).arrayBuffer();
  // var wb = read(f);
  console.log(wb);
}
