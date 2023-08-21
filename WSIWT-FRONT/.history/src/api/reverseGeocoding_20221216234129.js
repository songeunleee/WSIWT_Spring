import { read, utils, writeFile } from "xlsx";

export async function getRegion(latitude, longitude) {
  let data = reader.result;
  let workBook = XLSX.read(data, { type: "binary" });
  workBook.SheetNames.forEach(function (sheetName) {
    console.log("SheetName: " + sheetName);
    let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
    console.log(JSON.stringify(rows));
  });
}
