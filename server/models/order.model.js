const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },

}, {
    timestamps: true,
})

module.exports = mongoose.model('Order', OrderSchema);