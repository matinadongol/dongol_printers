const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');

dotenv.config({path: './config.env'});
require('./db/conn');

const app = express();

const PORT = process.env.PORT; 

app.get('/', (req, res) => {
    console.log(`index page`);
    res.send(`Hello duniya`);
});

app.get('/about', (req, res) => {
    console.log(`about page`);
    res.send(`Hello about duniya`);
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})