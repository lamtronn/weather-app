import { useContext, useMemo } from "react";
import { HomeContext } from "@/app/page";
import Image from "next/image";
import moment from "moment/moment";
import { isEmptyObject } from "@/utils/objectUtils";

const WeatherData = () => {
  const { weatherData, location } = useContext(HomeContext);

  const tempData = useMemo(() => {
    return {
      current: `${Math.round(weatherData?.main?.temp)}°C`,
      min: `${Math.round(weatherData?.main?.temp_min)}°C`,
      max: `${Math.round(weatherData?.main?.temp_max)}°C`,
    };
  }, [weatherData]);

  if (!weatherData) {
    return (
      <div
        className="bg-blue-100 border border-blue-400 text-blue-700 mt-3 px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">Enter city and country code.</span>
      </div>
    );
  }

  if (isEmptyObject(location)) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 mt-3 px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">
          Not found! Please try another input.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full backdrop-blur-sm bg-white rounded mt-3 p-5 flex justify-center items-center flex-col text-center gap-3">
      <div className="flex items-center">
        <p className="text-2xl">{location?.name}</p>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
          width={60}
          height={60}
          alt="weather icon"
        />
      </div>
      <p className="text-6xl">{tempData.current}</p>
      <p className="text-lg">
        H: {tempData.max} • L: {tempData.min}
      </p>
      <div className="block md:flex gap-5 justify-center">
        <p className="text-base">{weatherData?.weather?.[0]?.description}</p>
        <p className="text-base">Humidity: {weatherData?.main?.humidity}%</p>
        <p className="text-base">
          {moment(new Date()).format("YYYY-MM-DD h:mm a")}
        </p>
      </div>
    </div>
  );
};

export default WeatherData;
