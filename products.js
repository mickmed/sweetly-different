const Product = require('../models/product')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

