"use client";
import SearchBox from "@/components/SearchBox";
import WeatherData from "@/components/WeatherData";
import SearchHistory from "@/components/SearchHistory";
import { createContext } from "react";

export const HomeContext = createContext();

export default function Home() {
  const onSearch = () => {
    console.log("searching...");
  };
  return (
    <HomeContext.Provider value={{ onSearch }}>
      <main className="flex min-h-screen flex-col p-24">
        <h1>Today's Weather</h1>
        <SearchBox />
        <WeatherData />
        <SearchHistory />
      </main>
    </HomeContext.Provider>
  );
}
