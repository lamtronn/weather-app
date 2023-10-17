"use client";
import SearchBox from "@/components/SearchBox";
import WeatherData from "@/components/WeatherData";
import SearchHistory from "@/components/SearchHistory";
import { createContext, useEffect, useState } from "react";
import { LocationType } from "@/types/type";
import useApiGetWeatherData from "@/api/v1.0/useGetWeatherData";
import useGetGeoData from "@/api/v1.0/useGetGeoData";

export const HomeContext = createContext();

export default function Home() {
  const [location, setLocation] = useState<LocationType | undefined>();
  const { getWeatherData, weatherData } = useApiGetWeatherData();
  const { getGeoData } = useGetGeoData();

  const onSearch = async (city: string, country: string) => {
    const locationData = await getGeoData("Bangkok", "TH");
    await setLocation(locationData);
    await getWeatherData(locationData);
  };

  return (
    <HomeContext.Provider value={{ onSearch, weatherData, location }}>
      <main className="flex min-h-screen flex-col p-24">
        <h1>Today's Weather</h1>
        <SearchBox />
        <WeatherData />
        <SearchHistory />
      </main>
    </HomeContext.Provider>
  );
}
