import axios from "axios";

export async function getRegion(latitude, longitude) {
  const url = "https://sheetjs.com/data/executive.json';
  const raw_data = await await fetch(url);
  console.log(raw_data);
  return raw_data;
}
