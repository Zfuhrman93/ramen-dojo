const mongoose = require('mongoose');

//127.0.0.1:27017

mongoose.connect("mongodb://localhost/ramendojo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection to the Database was successful!'))
  .catch((err) => console.log('Connection to the Database failed!', err))