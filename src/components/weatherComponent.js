import React, { useState, useEffect } from "react";
import Today from "./renderToday";
import Hourly from "./renderHourly";

const WeatherComponent = (props) => {
  const [results, setResults] = useState();
  const [hourlyResults, setHourlyResults] = useState([]);
  const [city, setCity] = useState("")

  const changeCity = (e) => {
    setCity(e.target.value);
  };


  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response)
        setResults(response);
      });
  };

  const getHourly = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setHourlyResults(response.list);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather();
    getHourly();
  };



  return (
    <div>
      <form id="search-form" onSubmit={handleSearch}>
        <input id="search-city" onChange={changeCity}></input>
        <button id="search-btn" type="submit">
          Go
        </button>
      </form>

      {results ? <Today props={results} hourlyResults={hourlyResults} units={props.units} /> : null}
    {/* <Hourly hourlyResults={hourlyResults} />  */}
    </div>
  );
};

export default WeatherComponent;
