import { call } from "./Auth";

export async function getRegion(longitude, latitude) {
  const res = await call(`/open-api/region/${longitude}/${latitude}`,"GET")
  return res.data.documents[0].address_name;
}
