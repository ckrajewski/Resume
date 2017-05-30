var path = require('path');
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, '/dist')));
app.use("/public/images", express.static(__dirname + "/src/public/images"));
app.use("/public/documents", express.static(__dirname + "/src/public/documents"));

app.get('/downloads', function(request, response) {
  
  var file = path.join(__dirname, '/src/public/documents/sd.pdf');
  response.download(file);
  //response.download("sd.pdf","sd.pdf");
});


app.get('/', function(request, response) {
  console.log("starting here");
  response.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



