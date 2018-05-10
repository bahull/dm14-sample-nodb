const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const { getHeroes, getUniqueHero } = require("./controller/hero_controller");

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

// run `npm run build` to create a build folder
// then serve that folder with express static
// app.use(express.static(`${__dirname}/build`));

app.get("/api/heroes", getHeroes);

app.get("/api/heroes/:id", getUniqueHero);

app.listen(port, () => console.log(`Listening on port: ${port}`));
