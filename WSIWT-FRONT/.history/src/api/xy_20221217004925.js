export function getXY() {const f = await (await fetch("./rigion.xlsx")).arrayBuffer();
const wb = read(f); // parse the array buffer
const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
const data = utils.sheet_to_json(ws);
console.log(latitude.toFixed(2));
console.log(longitude.toFixed(2));
console.log(
  data.filter(
    (item) =>
      item.latitude == Math.floor(latitude, 2) &&
      item.longitude == Math.floor(longitude)
  )
);}