import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion() {
  const f = await (await fetch("/public/xlsx/rigion.xlsx")).arrayBuffer();
  var wb = XLSX.read(f);
  wb.SheetNames.forEach(function (sheetName) {
    var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
    console.log(JSON.stringify(rowObj));
  });
}
