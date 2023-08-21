import { read } from "xlsx";

export async function getRegion() {
  const data = read("./public/xlsx/rigion.xlsl");
  console.log(data);
}
