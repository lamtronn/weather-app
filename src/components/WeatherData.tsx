import { useContext } from "react";
import { HomeContext } from "@/app/page";
import useGetGeoData from "@/api/v1.0/useGetGeoData";

const WeatherData = () => {
  const { weatherData, location } = useContext(HomeContext);
  if (!weatherData) {
    return <div>no data</div>;
  }
  console.log(weatherData);
  return (
    <div className="w-full bg-white rounded mt-3 p-5 flex justify-center flex-col text-center gap-3">
      <p className="text-2xl">{location?.name}</p>
      <p className="text-6xl">{Math.round(weatherData.main.temp)}°C</p>
      <p className="text-lg">
        H:{Math.round(weatherData.main.temp_max)}°C • L:
        {Math.round(weatherData.main.temp_min)}°C
      </p>
      <div>
        <p className="text-base">{weatherData.weather[0].description}</p>
        <p className="text-base">Humidity: {weatherData.main.humidity}</p>
        <p className="text-base">{weatherData.weather[0].description}</p>
      </div>

      {/*<table>*/}
      {/*  <tbody>*/}
      {/*    <tr>*/}
      {/*      <td className="w-40">Description:</td>*/}
      {/*      <td>{weatherData.weather[0].description}</td>*/}
      {/*    </tr>*/}
      {/*    <tr>*/}
      {/*      <td className="w-40">Temperature:</td>*/}
      {/*      <td>{weatherData.main.temp}</td>*/}
      {/*    </tr>*/}
      {/*    <tr>*/}
      {/*      <td className="w-40">Humidity:</td>*/}
      {/*      <td>Maria Anders</td>*/}
      {/*    </tr>*/}
      {/*    <tr>*/}
      {/*      <td className="w-40">Time:</td>*/}
      {/*      <td>Maria Anders</td>*/}
      {/*    </tr>*/}
      {/*  </tbody>*/}
      {/*</table>*/}
      <div></div>
    </div>
  );
};

export default WeatherData;
