const { getUser, registerUser, updateUser, login, deleteUser, logout, protected } = require('../controllers/user.controller');

module.exports = app => {
  app.post('/api/register', registerUser);
  app.post('/api/login', login);
  app.post('/api/logout', logout);
  app.get('/api/user/:id', getUser);
  app.get('/api/protected', protected);
  app.put('/api/user/:id/edit', updateUser);
  app.delete('/api/user/:id', deleteUser);
}