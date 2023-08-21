import { read, utils } from "xlsx";

export async function getRegion() {
  const f = await (await fetch("https://sheetjs.com/pres.xlsx")).arrayBuffer();
  const wb = read(f);
  const data = utils.sheet_to_json;
  console.log(data);
}
