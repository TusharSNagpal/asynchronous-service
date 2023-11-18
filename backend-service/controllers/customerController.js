const asyncHandler = require('express-async-handler');
const Customer = require('../models/customer');
const pushInQueue = require('../service');
const bcrypt = require('bcryptjs');

const registerCustomer = asyncHandler(async(req, res) => {
    const {name, email, address, password} = req.body

    if(!name || !email || !address || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const customerExists = await Customer.findOne({email})

    if(customerExists) {
        res.status(400)
        throw new Error('Customer already Exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const customer = await Customer.create({
        name: name,
        email: email,
        address: address,
        password: hashedPassword
    })
    
    if(customer) {
        res.status(201).json({
            _id: customer.id,
            name: customer.name,
            email: customer.email,
            address: customer.address
        })
    } else {
        res.status(400)
        throw new Error('Invalid customer Data')
    }
});

const loginCustomer = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const customer = await Customer.findOne({email})

    if(customer && (await bcrypt.compare(password, customer.password))) {
        // const token = jwt.sign({email: customer.email}, 'secret')
        res.json({
            _id: customer.id,
            name: customer.name,
            email: customer.email,
            address: customer.address,
            // token
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

const getCustomer = asyncHandler(async(req, res) => {
    const {email} = req.body
    const customer = await Customer.findOne({email})

    if(customer) {
        res.json({
            _id: customer.id,
            name: customer.name,
            email: customer.email,
            address: customer.address
        })
    } else {
        res.status(400)
        throw new Error('Customer doesnot exist')
    }
})

module.exports = {registerCustomer, loginCustomer, getCustomer};