import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Taipei,tw" />
      <WeatherEngine location="Osaka,jp" />
    </div>
  );
}

export default App;
