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
          if (result.length === 0) {
            return {};
          }
          return result[0];
        });
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { getGeoData, submitting };
}

export default useGetGeoData;
