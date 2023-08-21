import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await (await fetch("./rigion.xlsx")).arrayBuffer();

  console.log(f);
}
