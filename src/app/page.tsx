"use client";
import SearchBox from "@/components/SearchBox";
import WeatherData from "@/components/WeatherData";
import SearchHistory from "@/components/SearchHistory";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { HistorySearchType, LocationType } from "@/types/type";
import useApiGetWeatherData from "@/api/v1.0/useGetWeatherData";
import useGetGeoData from "@/api/v1.0/useGetGeoData";
import { v4 as uuidv4 } from "uuid";
import { isEmptyObject } from "@/utils/objectUtils";

export const HomeContext = createContext();

export default function Home() {
  const [location, setLocation] = useState<LocationType | undefined>();
  const [searchHistory, setSearchHistory] = useState<>([]);
  const { getWeatherData, weatherData, setWeatherData } =
    useApiGetWeatherData();
  const { getGeoData } = useGetGeoData();

  const onSearch = useCallback(
    async (city: string, country: string) => {
      // Get location and weather data from openweathermap
      const locationData = await getGeoData(city, country);
      setLocation(locationData);

      if (!isEmptyObject(locationData)) {
        await getWeatherData(locationData);

        // Create and save search result to local storage
        const searchResult = {
          city,
          country,
          id: uuidv4(),
          createdDate: new Date(),
        };
        setSearchHistory((searchHistory) => [searchResult, ...searchHistory]);
      }
    },
    [getGeoData, getWeatherData, searchHistory]
  );

  return (
    <HomeContext.Provider
      value={{
        onSearch,
        weatherData,
        setWeatherData,
        location,
        searchHistory,
        setSearchHistory,
      }}
    >
      <main className="container mx-auto min-h-screen flex-col p-12 md:p-24">
        <h1 className="text-4xl mb-3">Today's Weather</h1>
        <SearchBox />
        <WeatherData />
        <SearchHistory />
      </main>
    </HomeContext.Provider>
  );
}
