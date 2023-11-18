const asyncHandler = require('express-async-handler');

const Item = require('../models/items');

const registerItem = asyncHandler(async (req,res) => {
    const {name, description} = req.body
    if(!name || !description) {
        res.status(400)
        throw new Error('Please add all Fields')
    }
    
    const item = await Item.create({
        itemName: name,
        itemDescription: description
    })
    res.status(201).json(item)
})

const getItems = asyncHandler(async (req,res) => {
    const items = await Item.find();
    res.status(200).json(items);
})

module.exports = {registerItem, getItems};