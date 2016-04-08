var express = require('express');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');

var handler = require('./handler');
var routes = require('./routes.json');

// Create server
var app = express();

// Bind routes
for (var routeId in routes) {
	var route = routes[routeId];
	app.get(route.pattern, handler(route));
}

var compiler = webpack(require('../webpack.config.js'));
app.use(webpackDevMiddleware(compiler, {
    headers: {
        'X-From-Webpack': true
    }
}));

var port = 8333;
app.listen(port, function() {
	process.stdout.write("Listening on port " + port);
});

