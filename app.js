var express = require('express');
var app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// TODO return data from a datastore.

app.get('/', function(req, res) {
	res.send({
		payload: [{
			"name": "sam",
			"role": "admin"
		}, {
			"name": "ann",
			"role": "exec"
		}, {
			"name": "dan",
			"role": "tech"
		}, {
			"name": "stan",
			"role": "admin"
		}, {
			"name": "pam",
			"role": "tech"
		}, {
			"name": "spam",
			"role": "exec"
		}],
		stamp: new Date()
	});
});

var server = app.listen(process.env.PORT || 80, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App is listening at http://%s:%s', host, port);
});
