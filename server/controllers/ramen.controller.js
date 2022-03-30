const { update } = require('../models/ramen.model');
const Ramen = require('../models/ramen.model');
const User = require('../models/user.model');

module.exports.createRamen = (req, res) => {
    Ramen.create(req.body)
        .then(ramen => res.json(ramen))
        .catch(err => res.json(err))
}

module.exports.getOneRamen = (req, res) => {
    Ramen.findOne({_id:req.params.id})
        .then(ramen => res.json(ramen))
        .catch(err => res.json(err))
}

module.exports.deleteRamen = (req, res) => {
    Ramen.deleteOne({_id: req.params.id})
        .then(deleteRamen => res.json(deleteRamen))
        .catch(err => res.json(err))
}

module.exports.updateRamen = (req, res) => {
    Ramen.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
        .then(updateRamen => res.json(updateRamen))
        .catch(err => res.json(err))
}

module.exports.addRamenToCart = (req, res) => {
    User.findOne({email: req.params.email})
        .then(oneUser => {
            let cart = oneUser.userCart
            Ramen.findOne({_id: req.params.id})
            .then(oneRamen => {
                cart.push(oneRamen)
                User.updateOne({userCart: cart}, oneUser)
                .then(updatedUser => res.json({user: updatedUser, message: "Added to cart"}))
            })
        }).catch(err => res.json(err))
}