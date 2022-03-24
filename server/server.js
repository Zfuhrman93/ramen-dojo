require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ credemtials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/user.routes')(app);

app.listen(8000, console.log(`Listening on port 8000`))