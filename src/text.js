"https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  Provinces: ["Cape Town", "Johannesburg", "Gauteng"],

  images: {
    backgroundDay: [
      "https://images.pexels.com/photos/269255/pexels-photo-269255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/248990/pexels-photo-248990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/572487/pexels-photo-572487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/175268/pexels-photo-175268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    backgroundNight: [
      "https://images.pexels.com/photos/374948/pexels-photo-374948.jpeg?auto=compress&cs=tinysrgb&h=350",
      "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1477539/pexels-photo-1477539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1480393/pexels-photo-1480393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/262738/pexels-photo-262738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  }
};
