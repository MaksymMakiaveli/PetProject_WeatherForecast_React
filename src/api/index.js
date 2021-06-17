import * as axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/';
const urlAPI = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'ce335fa02e62e132e4e1fc701c37eb7a';

const instance = axios.create({
  baseURL: `${cors}${urlAPI}`,
});

export const Weather = {
  locationUserWeather(latitude, longitude) {
    if (latitude && longitude) return instance.get(`weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
  },

  getCity(city) {
    return instance.get(`search/cities/?query=${city}`);
  },
};
