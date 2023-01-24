const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    nameInput: {
        type: String,
        required: true,
    },
    qtyInput: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Items", itemSchema, "items")