import axios from "axios";
import useCurrentLocation from "../hooks/useCurrentLocation";

const { location: currentLocation } = useCurrentLocation();

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
  params: { ServiceKey: process.env.REACT_APP_API_KEY },
});
