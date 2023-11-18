const mongoose = require('mongoose')
Schema = mongoose.Schema
//Schema
const itemSchema = mongoose.Schema({
        itemName: {
            type: String,
            required: [true, 'Please add the name of item']
        },
        itemDescription: {
            type: String,
            required: [true, 'Please add item description']
        }
    },
)

module.exports = mongoose.model('Item', itemSchema);