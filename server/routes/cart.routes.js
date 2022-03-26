const CartController = require('../controllers/cart.controller');

module.exports = (app) => {
    app.get("/cart/:id", CartController.getOneCart);
    app.post("/cart/new", CartController.createCart);
    app.delete("/cart/:id", CartController.deleteCart);
    app.put("/cart/:id/edit", CartController.updateCart);
}