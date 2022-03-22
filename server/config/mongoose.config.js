const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ramendojo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection to the Database was successful!'))
  .catch((err) => console.log('Connection to the Database failed!', err))