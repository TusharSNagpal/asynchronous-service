const mongoose = require('mongoose')
Schema = mongoose.Schema
//Schema
const orderSchema = mongoose.Schema({
        itemId: {
            type: String,
            required: [true, 'Please add the id of item']
        },
        custId: {
            type: String,
            required: [true, 'Please add id of customer']
        }
    },
)

module.exports = mongoose.model('Order', orderSchema);