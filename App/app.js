var express = require('express')
var app = express()
var db = require('../DB/DBConnection')
var userController = require('../Controller/UserController')
var productController = require('../Controller/ProductController')
var locationController = require('../Controller/locationController')

app.use('/', userController, productController, locationController)

module.exports = app;