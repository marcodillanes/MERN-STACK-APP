//RapidAPI Movie API

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: { s: "Avengers Endgame", r: "json", page: "1" },
  headers: {
    "X-RapidAPI-Key": "9b5643880dmsh28195ce9b2d54dcp127ad7jsnc5dee7a274ef",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

module.exports = options