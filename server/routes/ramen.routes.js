const RamenController = require('../controllers/ramen.controller');

module.exports = (app) => {
    app.get("/ramen/:id", RamenController.getOneRamen);
    app.delete("/ramen/:id", RamenController.deleteRamen);
    app.put("/ramen/:id/edit", RamenController.updateRamen);
    app.post("/ramen/new", RamenController.createRamen);
    app.post("/ramen/cart/:id/:email", RamenController.addRamenToCart);
}