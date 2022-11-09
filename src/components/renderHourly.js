import React, { useEffect, useState } from "react";

const Hourly = (props) => {
  const [system, setSystem] = useState("")
useEffect(() => {
  if (props.units === "F") {
    setSystem(imperial)
  } else {
    setSystem(metric)
  }

}, [system])


  let imperial = props.props.map((hour) => {
    let time = new Date(hour.dt * 1000);
    return (
      <div className="hourly-list">
        <p>
          {time.toLocaleString("en-US", { weekday: "short" })}{" "}
          {time.toLocaleString("en-US", { hour: "numeric" })}
        </p>
        <p>{Math.round(((hour.main.temp - 273.15) * 9) / 5 + 32)}F</p>
        <p>{hour.weather[0].main}</p>
      </div>
    );
  });

  let metric = props.props.map((hour) => {
    let time = new Date(hour.dt * 1000);
    return (
      <div className="hourly-list">
        <p>
          {time.toLocaleString("en-US", { weekday: "short" })}{" "}
          {time.toLocaleString("en-US", { hour: "numeric" })}
        </p>
        <p>{Math.round(((hour.main.temp - 273.15) * 10) / 10)}C</p>
        <p>{hour.weather[0].main}</p>
      </div>
    );
  });

  return (
    <div id="hourly">
      {system}
      {/* {props.props.map((hour) => {
        let time = new Date(hour.dt * 1000)
        return (
          <div className="hourly-list">
          <p>{time.toLocaleString("en-US", {weekday: "short"})}  {time.toLocaleString("en-US", {hour: "numeric"})}</p>
          <p>{Math.round(((hour.main.temp - 273.15) * 9) / 5 + 32)}F</p>
          <p>{hour.weather[0].main}</p>
          </div>
        )
      })} */}
    </div>
  );
};

export default Hourly;
