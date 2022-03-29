'use strict';

// requirements for server
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// bring in mongoose
const mongoose = require('mongoose');

// must bring in a scheme if we want to interact with that model
const Book = require('./models/book.js');

// connect Mongoose to our MongoDB
mongoose.connect(process.env.DB_URL);

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongoose is connected');
});

// routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
 });
  
app.get('/books', getBooks);
  
async function getBooks(req, res, next) {
  try {
    // maybe for your lab today
    // let results = await Cat.find({ email: req.query.email })
    let queryObject = {};
    if (req.query.email) {
      queryObject.email = req.query.email;
    }
    let results = await Book.find(queryObject);
    res.status(200).send(results);
  } catch(error) {
    next(error);
  }
 }
  
 
app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
