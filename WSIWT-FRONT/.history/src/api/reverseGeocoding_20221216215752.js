import axios from "axios";

export async function getRegion(latitude, longitude) {
  const res = await axios.get(
    "https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc",
    {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_X_NCP_APIGW_API_kEY_ID,
        "X-NCP-APIGW-API-KEY": process.env.REACT_APP_X_NCP_APIGW_API_kEY,
      },
      params: {
        coords: "128,38",
      },
    }
  );
  console.log(res.json());
  return res;
}
