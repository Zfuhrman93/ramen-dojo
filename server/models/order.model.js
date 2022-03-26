const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user: [UserSchema],
    ramen: [RamenSchema]

}, {
    timestamps: true,
    collection: 'orders',
})

module.exports = mongoose.model('Order', OrderSchema);