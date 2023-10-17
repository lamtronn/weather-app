import { useCallback, useState } from "react";
import { LocationType } from "@/types/type";

function useApiGetWeatherData() {
  const [weatherData, setWeatherData] = useState();
  const [submitting, setSubmitting] = useState(false);

  const getWeatherData = useCallback(async (location: LocationType) => {
    setSubmitting(true);

    try {
      return await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherData(result);
          console.log(result);
        });
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { getWeatherData, weatherData, submitting };
}

export default useApiGetWeatherData;
