const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ramendojo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection to the Database was successful!'))
  .catch((err) => console.log('Connection to the Database failed!', err))