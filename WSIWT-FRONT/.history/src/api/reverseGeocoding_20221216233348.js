import axios from "axios";

export async function getRegion(latitude, longitude) {
  const url = "./public/xlsx.rigion.xlsx";
  const raw_data = await await fetch(url);
  console.log(raw_data.json());
  return raw_data;
}
