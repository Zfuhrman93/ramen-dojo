const OrderController = require('../controllers/order.controller');

module.exports = (app) => {
    app.get("/order/:id", OrderController.getOneOrder);
    app.delete("/order/:id", OrderController.deleteOrder);
    app.put("/order/:id/edit", OrderController.updateOrder);
    app.post("/order/new", OrderController.createOrder);
}