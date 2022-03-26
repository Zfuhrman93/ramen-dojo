const { update } = require('../models/cart.model');
const Cart = require('../models/cart.model');

module.exports.createCart = (req, res) => {
    Cart.create(req.body)
        .then(cart => res.json(cart))
        .catch(err => res.json(err))
}

module.exports.getOneCart = (req, res) => {
    Cart.findOne({_id:req.params.id})
        .then(cart => res.json(cart))
        .catch(err => res.json(err))
}

module.exports.deleteCart = (req, res) => {
    Cart.deleteOne({_id: req.params.id})
        .then(deleteCart => res.json(deleteCart))
        .catch(err => res.json(err))
}

module.exports.updateCart = (req, res) => {
    Cart.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
        .then(updateCart => res.json(updateCart))
        .catch(err => res.json(err))
}