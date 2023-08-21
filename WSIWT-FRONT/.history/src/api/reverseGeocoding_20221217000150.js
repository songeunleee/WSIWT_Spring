import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await (await fetch("/public/xlsx/rigion.xlsx")).arrayBuffer();
  var wb = XLSX.read(f, { type: "binary" });
  console.log(f);
}
