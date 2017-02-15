const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bc571a0180b1d87fb90e1737f111694d&units=metric';

//bc571a0180b1d87fb90e1737f111694d

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then((res) => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('No such City!');
    });
  }
};
