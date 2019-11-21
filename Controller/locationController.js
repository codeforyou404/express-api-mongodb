var express = require('express');
var routerLocation = express.Router();
var queryLocation = require('../DB/DBRepo/QueryLocation');
var bodyParser = require('body-parser');
var apiResponse = require('../ApiResponse/ApiResponse');

routerLocation.use(bodyParser.urlencoded({ extended: true }));
routerLocation.use(bodyParser.json());

routerLocation.post('/addLocation', function (req, res) {

  if (req.body.latitude == null || req.body.longitude == null) {
    res.status(200).send(new apiResponse(null, "Please pass valid key: values", false));
    return 0;
  }

  new queryLocation().create(function (data) {
    res.status(200).send(data);
  }, {
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });
});

routerLocation.get('/locations', function (req, res) {
  new queryLocation().selectAll(function (data) {
    res.status(200).send(data);
  });
});

routerLocation.get('/location/:id', function (req, res) {
  new queryLocation().selectById(req.params.id, function (data) {
    res.status(200).send(data);
  });
});

routerLocation.delete('location/delete/:id', function (req, res) {
  new queryLocation().deleteById(req.params.id, function (data) {
    res.status(200).send(data);
  })
});

routerLocation.put('location/update/:id', function (req, res) {
  new queryLocation().updateById(req.params.id, function (data) {
    res.status(200).send(data);
  })
});


module.exports = routerLocation;