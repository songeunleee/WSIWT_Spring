import { read, utils } from "xlsx";
import XLSX from "xlsx";

export async function getRegion(latitude, longitude) {
  const f = await (await fetch("./rigion.xlsx")).arrayBuffer();
  const wb = read(f); // parse the array buffer
  const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  const data = utils.sheet_to_json(ws);
  console.log(
    data.filter((item) => {
      item.latitude === latitude && item.longitude === longitude;
    })
  );
}
