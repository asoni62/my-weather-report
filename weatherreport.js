var express = require("express");
var app     = express();
var path    = require("path");
const PORT = process.env.PORT || 8090;

app.use(express.static('weatherReport'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, function () {
	console.log('Node default port : ' + PORT);
});
