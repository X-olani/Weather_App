import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  Provinces: ["Cape Town", "Johannesburg", "Gauteng"],
  Opening: "Please Select A City",
  displayBlock: "none",
  comment: {
    hot: "Put on that summer shirt bro",
    cold: "ayy it's bit icy bro a jersey looking good right now",
    coldish: "bro just take a light jersey wih you ayt boom"
  },

  selectedProvince: "Please Select A City",
  images: {
    backgroundDay: [
      "background-image:url('https://images.pexels.com/photos/269255/pexels-photo-269255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/248990/pexels-photo-248990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/572487/pexels-photo-572487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/175268/pexels-photo-175268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
    ],
    backgroundNight: [
      "background-image:url('https://images.pexels.com/photos/374948/pexels-photo-374948.jpeg?auto=compress&cs=tinysrgb&h=350')",
      "background-image:url('https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/1477539/pexels-photo-1477539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/1480393/pexels-photo-1480393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940])",
      "background-image:url('https://images.pexels.com/photos/262738/pexels-photo-262738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      "background-image:url('https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
    ]
  },
  windComment: {
    calm: "ayy t's chilled,no need to tie your hair up ",
    lightBreeze: "we still good it's a light breeze out there",
    freshBreeze:
      "Okay bro it's bit windy take a light jersey in case the sun decides to dip and tie your hair up ",
    strongBreeze: "The wind will push you into the street ",
    gale: "Bro Bro don't go outside"
  }
};

export const getProvince = args => {
  return (dispatch, getState) => {
    let weatherAPI =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      args +
      ",South Africa&units=metric&appid=2e9631ab28e2b456e8a3724087cc728a";

    axios.get(weatherAPI).then(res => {
      return dispatch({
        type: "PROVINCE",
        select: args,
        results: res.data
      });
    });
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROVINCE":
      console.log(action.results);
      let results = action.results;
      let tempComment;
      let a = results.weather[0].icon;
      let messageWind;
      //comment
      if (results.main.temp > 17) {
        tempComment = state.comment["hot"];
      }
      if (results.main.temp <= 17) {
        tempComment = state.comment["coldish"];
      }
      if (results.main.temp < 15) {
        tempComment = state.comment["cold"];
      }
      //time of day
      let d = new Date(); // for now
      let currentTimeImage;

      d.getMinutes(); // =>  30
      d.getSeconds(); // => 51
      let randoNum = Math.floor(Math.random() * 6);

      let timeOfDay = d.getHours();
      if (timeOfDay > 0 && timeOfDay < 6) {
        currentTimeImage = state.images.backgroundNight[randoNum];
      }
      if (timeOfDay >= 6 && timeOfDay < 17) {
        currentTimeImage = state.images.backgroundDay[randoNum];
      }

      if (timeOfDay >= 17 && timeOfDay < 23) {
        currentTimeImage = state.images.backgroundNight[randoNum];
      }
      //wind speed
      let windSpeed = results.wind.speed;
      console.log(windSpeed);
      if (windSpeed >= 0.5 && windSpeed < 3.3) {
        messageWind = state.windComment.calm;
      }
      if (windSpeed >= 3.3 && windSpeed < 7.9) {
        messageWind = state.windComment.lightBreeze;
      }
      if (windSpeed >= 7.9 && windSpeed < 13.8) {
        messageWind = state.windComment.freshBreeze;
      }
      if (windSpeed >= 13.8 && windSpeed < 20.7) {
        messageWind = state.windComment.strongBreeze;
      }
      if (windSpeed >= 20.7 && windSpeed <= 24.4) {
        messageWind = state.windComment.gale;
      }

      //
      let getIcon = "http://openweathermap.org/img/w/" + a + ".png";
      let newObject = {
        name: action.select,
        temp: results.main.temp,
        weather: results.weather[0].description,
        main: results.weather[0].main,
        windSpeed: results.wind.speed,
        humidity: results.main.humidity,
        imageOfWeather: currentTimeImage,
        comment: tempComment,
        theWindComment: messageWind,
        icon: getIcon
      };
      console.log(newObject);
      return {
        //

        ...state,
        selectedProvince: newObject,
        Opening: "",
        displayBlock: "block"
      };
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
