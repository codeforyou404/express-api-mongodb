var express = require('express');
var routerUser = express.Router();
var queryUser = require('../DB/DBRepo/QueryUser');
var bodyParser = require('body-parser');
var apiResponse = require('../ApiResponse/ApiResponse');

routerUser.use(bodyParser.urlencoded({ extended: true }));
routerUser.use(bodyParser.json());

routerUser.post('/addUser', function (req, res) {

  if (req.body.name == null || req.body.lastname == null) {
    res.status(200).send(new apiResponse(null, "Please pass valid key: values", false));
    return 0;
  }
  new queryUser().create(function (data) {
    res.status(200).send(data);
  }, {
      name: req.body.name,
      lastname: req.body.lastname
    });
});

routerUser.get('/users', function (req, res) {
  new queryUser().selectAll(function (data) {
    res.status(200).send(data);
  });
});

routerUser.get('/user/:id', function (req, res) {
  console.log(req.params.id);
  new queryUser().selectById(req.params.id, function (data) {
    res.status(200).send(data);
  });
});

routerUser.delete('user/delete/:id', function (req, res) {
  new queryUser().deleteById(req.params.id, function (data) {
    res.status(200).send(data);
  })
});

routerUser.put('user/update/:id', function (req, res) {
  new queryUser().updateById(req.params.id, function (data) {
    res.status(200).send(data);
  })
});


module.exports = routerUser;