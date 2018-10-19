import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { MenuItem } from "./MenuItem";

export const App = props => {
  const gettingProvince = args => {
    props.getSelectedProvince(args);
  };
  return (
    <div Style={props.selectedProvince.imageOfWeather} className="MainContent">
      <nav>
        {props.Provinces.map((province, index) => {
          return (
            <MenuItem province={province} gettingProvince={gettingProvince} />
          );
        })}
      </nav>
      <div className="DisplayWeather">
        <div className="WeatherContent">
          <h1>
            Weather forecast <img id="Icon" src={props.selectedProvince.icon} />
          </h1>
          <h3>{props.selectedProvince.name}</h3>
          {props.opening}

          <table Style={"display:" + props.displayBlock}>
            <tbody>
              <tr>
                <td>Weather for today:</td>
                <td>{props.selectedProvince.weather}</td>
              </tr>

              <tr>
                <td>temperature:</td>
                <td>
                  {props.selectedProvince.temp}
                  &#8451;
                </td>
              </tr>
              <tr>
                <td>wind speeds:</td>
                <td>
                  {props.selectedProvince.windSpeed}
                  m/s
                  <br />
                  {props.selectedProvince.theWindComment}
                </td>
              </tr>

              <tr>
                <td>message:</td>
                <td> {props.selectedProvince.comment}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
