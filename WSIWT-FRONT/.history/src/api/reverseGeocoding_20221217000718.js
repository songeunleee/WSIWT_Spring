import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await (await fetch("rigon.xlsx")).arrayBuffer();
  var wb = read(f);
  console.log(f);
}
