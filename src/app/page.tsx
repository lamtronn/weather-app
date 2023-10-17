import Image from "next/image";
import SearchBox from "@/components/SearchBox";
import WeatherData from "@/components/WeatherData";
import SearchHistory from "@/components/SearchHistory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Today's Weather</h1>
      <SearchBox />
      <WeatherData />
      <SearchHistory />
    </main>
  );
}
