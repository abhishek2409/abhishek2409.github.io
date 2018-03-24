var express = require('express');
var app = express();
var path = require('path');
var expressStaticGzip = require("express-static-gzip");

app.use("/", expressStaticGzip("dist"));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});


var port = 8080;
var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Assignment Project is listening at http://%s:%s', host, port);
});
