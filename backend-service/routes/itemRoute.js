const express = require('express');
const router = express.Router();

const { registerItem, getItems } = require('../controllers/itemController')

router.post('/', registerItem)

router.get('/allItems', getItems)

module.exports = router