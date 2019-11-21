var app = require('../App/app');
var port = 3000;
var db = require('../DB/DBConnection');
var server = app.listen(port, function () {
  var host = server.address().address
  console.log('Express server listening on port ' + host + port);
});




