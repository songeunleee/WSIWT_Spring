import axios from "axios";

const instance = axios.create({
  baseURL: "https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc",
  headers: {
    "X-NCP-APIGW-API-KEY-ID": client_id,
    "X-NCP-APIGW-API-KEY": client_secret,
  },
});

export async function getRegion(latitude, longitude) {
  const res = await instance.get({
    params: {
      cords: `${latitude},${longitude}`,
    },
  });
}
