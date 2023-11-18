const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is compulsory to add.']
    },
    email: {
        type: String,
        required: [true, 'Email Address is  is compulsory to add.'],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'Address is  is compulsory to add.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
})

module.exports = mongoose.model('Customer', customerSchema)