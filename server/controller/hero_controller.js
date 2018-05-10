const axios = require("axios");

module.exports = {
  getHeroes(req, res, next) {
    axios
      .get("http://swapi.co/api/people")
      .then(response => {
        res.json(response.data);
      })
      .catch(console.log);
  },
  getUniqueHero(req, res, next) {
    axios
      .get(`http://swapi.co/api/people/${req.params.id}`)
      .then(response => {
        res.json(response.data);
      })
      .catch(console.log);
  }
};
