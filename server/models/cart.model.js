const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    user: [UserSchema],
    ramen: [RamenSchema]
}, {
    timestamps: true,
    collection: 'cart',
});

module.exports = mongoose.model('Cart', CartSchema);