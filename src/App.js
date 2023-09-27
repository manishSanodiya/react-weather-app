import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api";
import { useState } from "react";
import Forcast from "./components/forcast/Forcast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forcastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather({city:searchData.label,...weatherResponse});
        setForcast({city:searchData.label,...forcastResponse});
      })
      .catch((err) => console.log(err));
  };

  // console.log(currentWeather);
  console.log(forcast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forcast && <Forcast data={forcast}/>}
    </div>
  );
}

export default App;
