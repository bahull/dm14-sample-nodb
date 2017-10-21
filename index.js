const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

// run `npm run build` to create a build folder
// then serve that folder with express static
app.use(express.static(`${__dirname}/build`));

app.get('/api/heroes', (req, res, next) => {
    axios.get('http://swapi.co/api/people').then(response => {
        res.json(response.data);
    }).catch(console.log);
});

app.get('/api/heroes/:id', (req, res, next) => {
    axios.get(`http://swapi.co/api/people/${req.params.id}`).then(response => {
        res.json(response.data);
    }).catch(console.log);
})






app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
