import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const Weather = styled.div`
    margin: 0 auto;
    color: white;
    display: flex;
  `;

  // init for our state variable
  const [query, setQuery] = useState("Taipei, tw");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  // defining the data fetching function
  const getWeather = async q => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=943a270cfbaedd87fcc87f8591c37d65`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: resJSON.main.temp,
      city: resJSON.name,
      condition: resJSON.weather[0].main,
      country: resJSON.sys.country
    });
  };

  const handleSearch = e => {
    // e stands for event
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <Weather>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </Weather>
  );
};

export default WeatherEngine;
