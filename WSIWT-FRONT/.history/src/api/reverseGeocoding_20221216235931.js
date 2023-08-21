import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await (await fetch("/public/xlsx/rigion.xlsx")).arrayBuffer();
  const wb = read(f, { type: "binary" });
  console.log(wb); // update state
}
