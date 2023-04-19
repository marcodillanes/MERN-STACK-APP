//RapidAPI Movie API

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9b5643880dmsh28195ce9b2d54dcp127ad7jsnc5dee7a274ef",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

fetch(
  "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

module.exports = options