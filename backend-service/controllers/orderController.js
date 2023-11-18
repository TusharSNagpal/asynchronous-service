const asyncHandler = require('express-async-handler');

const Order = require('../models/orders');
const Customer = require('../models/customer');
const Item = require('../models/items');

const pushInQueue = require('../rabbitMQ/send');

const placeOrder = asyncHandler(async (req,res) => {
    const {itemId, custId} = req.body
    if(!itemId || !custId) {
        res.status(400)
        throw new Error('Please add all Fields')
    }
    
    const order = await Order.create({
        itemId,
        custId
    })

    const customer = await Customer.find({_id: custId});
    const item = await Item.find({_id: itemId});

    if(!customer){
        res.status(400)
        throw new Error('Invalid Customer Id')
    }
    // console.log(customer);
    await pushInQueue('email-queue', `${customer[0].email},#OrderID: ${order.id} successfully placed., Dear customer your order has been placed successfully.\n--Product Details--\n${item[0].itemName}\n${item[0].itemDescription}`);
    res.status(201).json(order)
})

module.exports = {placeOrder};