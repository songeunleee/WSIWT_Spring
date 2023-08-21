import { read, utils } from "xlsx";

export async function getRegion() {
  const f = await await fetch("/public/xlsx/rigion.xlsx");
  //const wb = read(f); // parse the array buffer
  //  const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  // const data = utils.sheet_to_json(ws); // generate objects
  console.log(f); // update state
}
