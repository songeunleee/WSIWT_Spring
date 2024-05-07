import { call } from "./Auth";

export async function  getCitydata(cityName){
    const res = await call(`/open-api/city/${cityName}`, "GET");
     const weather = res.data.CITYDATA;

    return weather;
} 