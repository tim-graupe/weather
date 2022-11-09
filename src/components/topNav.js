import React, { useState } from "react";
import WeatherComponent from "./weatherComponent";

const TopNav = (props) => {
  const [units, setUnits] = useState("F");
  const [search, setSearch] = useState("");

  const changeUnits = () => {
    units === "F" ? setUnits("C") : setUnits("F");
  };


  return (
    <section className="top-navBar">
      <button id="units-btn" onClick={() => changeUnits()}>
        Current Unit: {units}
      </button>

      <WeatherComponent
        units={units}
        search={search}
        setSearch={setSearch}

      />
    </section>
  );
};
export default TopNav;
