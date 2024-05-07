import { useQuery } from '@tanstack/react-query';
import { getVilageFcst } from '../api/weather';

export default function useWeather(location) {
    const weatherQuery = useQuery(["weather", location], () =>
    getVilageFcst(location.longitude, location.latitude)
  );

  return { weatherQuery };
}

