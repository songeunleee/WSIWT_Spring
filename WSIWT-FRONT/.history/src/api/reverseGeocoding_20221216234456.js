import { read } from "xlsx";

export async function getRegion() {
  const data = read("./public/xlsx/rigion.xlsx", { type: "binary" });
  console.log(data);
}
