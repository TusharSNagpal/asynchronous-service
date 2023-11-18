const express = require('express');
const colors = require('colors')
const cors = require('cors');

const mongoDB = require('./config/db');

const app = express();

require('dotenv').config();

//database connection function:

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.raw({extended: false}));

app.use('/api/customers', require('./routes/customerRoute'));
app.use('/api/items', require('./routes/itemRoute'));
app.use('/api/orders', require('./routes/orderRoute'));

mongoDB().then(() => {
	console.log('Successfully connected to MongoDB')
})
.catch((error) => {
	console.log(`Failed to connect to MongoDB: ${error.message}`)
});

module.exports = app