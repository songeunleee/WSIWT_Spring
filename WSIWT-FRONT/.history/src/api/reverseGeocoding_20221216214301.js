import axios from "axios";

const instance = axios.create({
  baseURL: "https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc",
  headers: {
    "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_X_NCP_APIGW_API_kEY_ID,
    "X-NCP-APIGW-API-KEY": process.env.REACT_APP_X_NCP_APIGW_API_kEY,
  },
});

export async function getRegion(latitude, longitude) {
  const res = await instance.get({
    params: {
      cords: `${latitude},${longitude}`,
    },
  });
  console.log(res.toString());
  return res;
}
