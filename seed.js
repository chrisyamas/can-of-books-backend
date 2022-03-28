'use strict';
 
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/book');
mongoose.connect(process.env.DB_URL);
 
async function seed() {
 // same structure as our Book Schema
 // title: { type: String, required: true },
 // description: { type: String, required: true },
 // status: { type: Boolean, required: true },
 // email: { type: String, required: true }
 await Cat.create({
   title: 'Don Quixote',
   description: 'Classic tale of Spanish man who defends the helpless and destroys the wicked.',
   status: true,
   email: 'yamas.chris@gmail.com'
 });
 console.log('Don Quixote was added');
 
 await Cat.create({
  title: 'A Tale of Two Cities',
  description: 'Classic tale of a French doctor\'s imprisonment in the lead up to the French Revolution.',
  status: true,
  email: 'yamas.chris@gmail.com'
});
console.log('A Tale of Two Cities was added');

await Cat.create({
  title: 'The Lord of the Rings',
  description: 'A saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil.',
  status: true,
  email: 'yamas.chris@gmail.com'
});
console.log('The Lord of the Rings was added');

 // remember to hang up the connection with mongoose
 mongoose.disconnect();
}
 
seed();