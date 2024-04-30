const express = require('express')
const newproduct  = require('../controllers/productctrl')

// const newuser = require('../controllers/userctrl')

const route = express.Router

route.post =("/add", newproduct)

module.exports =route