import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { Component } from "./component";
import { getWeatherForArea } from "./store";
ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById("root")
);
