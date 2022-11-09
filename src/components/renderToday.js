import React, { useEffect, useState } from "react";
import Hourly from "./renderHourly";

const Today = (props, hourlyResults) => {
  const [convertedTemp, setConvertedTemp] = useState("");
  const [feel, setFeel] = useState("");
  const [description, setDescription] = useState("");
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");

  const name = props.props.name;

  useEffect(() => {
    if (props.units === "F") {
      setConvertedTemp(
        Math.round(((props.props.main.temp - 273.15) * 9) / 5 + 32) + "F"
      );
      setFeel(
        Math.round(((props.props.main.feels_like - 273.15) * 9) / 5 + 32) + "F"
      );
      setLow(
        Math.round(((props.props.main.temp_min - 273.15) * 9) / 5 + 32) + "F"
      );

      setHigh(
        Math.round(((props.props.main.temp_max - 273.15) * 9) / 5 + 32) + "F"
      );
    } else {
      setConvertedTemp(
        Math.round((props.props.main.temp - 273.15) * 10) / 10 + "C"
      );
      setFeel(
        Math.round(((props.props.main.feels_like - 273.15) * 10) / 10) + "C"
      );

      setLow(
        Math.round(((props.props.main.temp_min - 273.15) * 10) / 10) + "C"
      );
      setHigh(
        Math.round(((props.props.main.temp_max - 273.15) * 10) / 10) + "C"
      );
    }
  }, [
    props.units,
    props.props.main.temp,
    props.props.main.feels_like,
    props.props.main.temp_max,
    props.props.main.temp_min,
  ]);

  return (
    <div id="today-weather">
      <h1 id="temp-header">{convertedTemp}</h1>

      <h3 id="city-today-name">{name}</h3>
      <p className="today-sub-text">Feels like: {feel}</p>
      <p className="today-sub-text"></p>
      <p>{description}</p>
      <p>
        Low: {low} High: {high}
      </p>
      {hourlyResults ? (
        <Hourly props={props.hourlyResults} units={props.units} />
      ) : null}
    </div>
  );
};

export default Today;
