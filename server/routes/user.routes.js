const { getUser, registerUser } = require('../controllers/user.controller');

module.exports = app => {
  app.post('/api/register', registerUser);
  app.get('/api/user/:id', getUser);
}