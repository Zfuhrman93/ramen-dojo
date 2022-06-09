const { createRamen, getOneRamen, updateRamen, deleteRamen, recentRamen } = require('../controllers/ramen.controller');

module.exports = app => {
  app.post("/api/ramen", createRamen);
  app.get("/api/ramen/recent", recentRamen);
  app.get("/api/ramen/:id", getOneRamen);
  app.put("/api/ramen/:id/edit", updateRamen);
  app.delete("/api/ramen/:id", deleteRamen);
}