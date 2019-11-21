var express = require('express');
var routerProduct = express.Router();
var bodyParser = require('body-parser');
routerProduct.use(bodyParser.urlencoded({ extended: true }));
routerProduct.use(bodyParser.json());
var queryProduct = require('../DB/DBRepo/QueryProduct');
var mail = require('../Util/Mail');



routerProduct.post('/addProduct', function (req, res) {

    if (req.body.product_name == null
        || req.body.price == null
        || req.body.discount == null
        || req.body.favicon_url == null) {
        res.status(200).send(new apiResponse(null, "Please pass valid key: values", false));
        return 0;
    }

    new queryProduct().create(function (data) {
        res.status(200).send(data);
    }, {
            product_name: req.body.product_name,
            price: req.body.price,
            discount: req.body.discount,
            favicon_url: req.body.favicon_url
        });
});

routerProduct.get('/product', function (req, res) {
    new queryProduct().selectAll(function (data) {
        res.status(200).send(data);
    })
});

routerProduct.get('/product/:id', function (req, res) {
    new queryProduct().selectById(req.params.id, function (data) {
        res.status(200).send(data);
    });
});

routerProduct.delete('product/delete/:id', function (req, res) {
    new queryProduct().deleteById(req.params.id, function (data) {
        res.status(200).send(data);
    })
});

routerProduct.put('product/update/:id', function (req, res) {
    new queryProduct().updateById(req.params.id, function (data) {
        res.status(200).send(data);
    })
});

module.exports = routerProduct;