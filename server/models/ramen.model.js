const mongoose = require('mongoose');
const RamenSchema = new mongoose.Schema({
    noodleType: {
        type: String,
        required: [true],
        enum: {
            values: ['Straight Noodles', 'Wavy Noodles'],
            message: 'Please select a vaild noodle type'
        }
    },
    size: {
        type: String,
        required: [true, "Please select a ramen bowl size"],
        enum: {
            values: ['Small', 'Medium', 'Large'],
            message: 'Size needs to be Small or Medium or Large'
        }
    },
    soupBase: {
        type: String,
        required: [true, "Please select a soup base"],
        enum: {
            values: ["Shoyu (soy sauce)", "Shio (salt)", "Miso (soybean paste)", "Tonkotsu (pork bone)"],
            message: 'Soup base is required'
        }
    },
    chashu: {
        type: Boolean,
        default: false,
        required: [false],
    },
    menma: {
        type: Boolean,
        default: false,
        required: false,
    },
    moyashi: {
        type: Boolean,
        default: false,
        required: false,
    },
    tamago: {
        type: Boolean,
        default: false,
        required: false,
    },
    seaweed: {
        type: Boolean,
        default: false,
        required: false,
    },
    kamaboko: {
        type: Boolean,
        default: false,
        required: false,
    },
    corn: {
        type: Boolean,
        default: false,
        required: false,
    },
    butter: {
        type: Boolean,
        default: false,
        required: false,
    },
});

module.exports = mongoose.model('Ramen', RamenSchema);