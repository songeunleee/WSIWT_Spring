import axios from "axios";

const instance = axios.create({
    baseURL: "https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc",
  });
  
  export function getRegion(latitude,longitude){
    const res = await instance.get({
        params: {
           
        cords:`${latitude},${longitude}`
        },
      });