import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { getRegion } from "../api/reverseGeocoding";
import useCurrentLocation from "../hooks/useCurrentLocation";


const PlaceContext = createContext();

export function PlaceContextProvider({ children }) {
  const { location } = useCurrentLocation();
 const [place,setPlace] = useState();

 const regionQuery = useQuery(["region", location], () =>
 getRegion(location.longitude, location.latitude)
);

useEffect(()=>{
  setPlace(regionQuery.data&& regionQuery.data);
},[regionQuery.data])
 
const returnCurrentLocation = () =>{
  setPlace(regionQuery.data&& regionQuery.data);
}

  return (
    <PlaceContext.Provider value={{ place, setPlace,returnCurrentLocation }}>
      {children}
    </PlaceContext.Provider>
  );
}

export function usePlaceContext() {
  return useContext(PlaceContext);
}
