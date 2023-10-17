import { useCallback, useState } from "react";
import { LocationType } from "@/types/type";

function useGetGeoData() {
  // const [location, setLocation] = useState<LocationType | undefined>();
  const [submitting, setSubmitting] = useState(false);

  const getGeoData = useCallback(async (city: string, country: string) => {
    setSubmitting(true);

    try {
      return await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/geo/1.0/direct?q=${city},${country}&limit=10&APPID=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          // setLocation({
          //   lat: result[0].lat,
          //   lon: result[0].lon,
          // });
          return result[0];
        });
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { getGeoData, submitting };
}

export default useGetGeoData;
//
// {
//   "coord": {
//   "lon": 100.4935,
//     "lat": 13.7525
// },
//   "weather": [
//   {
//     "id": 804,
//     "main": "Clouds",
//     "description": "overcast clouds",
//     "icon": "04d"
//   }
// ],
//   "base": "stations",
//   "main": {
//   "temp": 32.82,
//     "feels_like": 38.72,
//     "temp_min": 32.19,
//     "temp_max": 33.96,
//     "pressure": 1008,
//     "humidity": 59,
//     "sea_level": 1008,
//     "grnd_level": 1007
// },
//   "visibility": 10000,
//   "wind": {
//   "speed": 3.34,
//     "deg": 97,
//     "gust": 3.79
// },
//   "clouds": {
//   "all": 95
// },
//   "dt": 1697525965,
//   "sys": {
//   "type": 2,
//     "id": 2032756,
//     "country": "TH",
//     "sunrise": 1697497728,
//     "sunset": 1697540274
// },
//   "timezone": 25200,
//   "id": 1608132,
//   "name": "Nonthaburi",
//   "cod": 200
// }
