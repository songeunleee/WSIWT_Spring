import axios from "axios";
import useCurrentLocation from "../hooks/useCurrentLocation";

const { location: currentLocation } = useCurrentLocation();

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
  params: {
    ServiceKey: process.env.REACT_APP_API_KEY}
})


params: {
  ServiceKey: process.env.REACT_APP_API_KEY,
  pageNo: 1,
  numOfRows: 1000,
  dataType: "XML",
  base_date: "22021214",
  base_time: "1930",
  nx: currentLocation.latitude,
  my: currentLocation.longitude,
},