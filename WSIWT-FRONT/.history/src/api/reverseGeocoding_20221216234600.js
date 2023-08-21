import { read } from "xlsx";

export async function getRegion() {
  const workbook = read("./public/xlsx/rigion.xlsx", { type: "binary" });
  workbook.SheetNames.forEach(function (item, index, array) {
    EXCEL_JSON = XLSX.utils.sheet_to_json(workbook.Sheets[item]);
  });
  console.log(workbook);
}
