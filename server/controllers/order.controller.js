const { update } = require('../models/order.model');
const Order = require('../models/order.model');

module.exports.createOrder = (req, res) => {
    Order.create(req.body)
        .then(order => res.json(order))
        .catch(err => res.json(err))
}

module.exports.getOneOrder = (req, res) => {
    Order.findOne({_id:req.params.id})
        .then(order => res.json(order))
        .catch(err => res.json(err))
}

module.exports.deleteOrder = (req, res) => {
    Order.deleteOne({_id: req.params.id})
        .then(deleteOrder => res.json(deleteOrder))
        .catch(err => res.json(err))
}

module.exports.updateOrder = (req, res) => {
    Order.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
        .then(updateOrder => res.json(updateOrder))
        .catch(err => res.json(err))
}