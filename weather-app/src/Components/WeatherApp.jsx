import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 25.09,
    tempMax: 32.09,
    tempMin: 20.05,
    humidity: 47,
    feelsLike: 24.4,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
