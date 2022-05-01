const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// enabling functionalities for the whole app
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// importing the data files
const dataFlights = require('./data/MyFlights');
const dataMovies = require('./data/MyMovies');

app.get("/", (req, res) => res.send("Backend server is up and running."));

app.get("/flights", (req, res) => res.json(dataFlights).sendStatus(200));

app.get("/movies", (req, res) => res.json(dataMovies).sendStatus(200));

app.listen(port, () => console.log(`Backend server is running on port ${port}`));
