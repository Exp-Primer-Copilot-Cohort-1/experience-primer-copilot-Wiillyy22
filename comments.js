// create web server
// create a server
var express = require('express');
var app = express();
var port = 3000;

// create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

// start the server
app.listen(port, function() {
    console.log('Server started on http://localhost:' + port);
});
 
 In this example, the server is created using the express module and the route is created using the app.get() method. The route is defined as '/comments' and when a request is made to this route, the server will send the response 'This is the comments page'. The server is started on port 3000 using the app.listen() method. 
 2. Express.js Route Parameters Example 
 In this example, we will create a route with parameters. We will create a route that accepts a parameter in the URL and sends the response with the parameter value. 
 // Path: comments.js
// create a server
var express = require('express');
var app = express();
var port = 3000;

// create a route with parameters
app.get('/comments/:id', function(req, res) {
    res.send('Comment ID: ' + req.params.id);
});

// start the server
app.listen(port, function() {
    console.log('Server started on http://localhost:' + port);
});
 
 In this example, the route is defined as '/comments/:id' where ':id' is the parameter. When a request is made to this route, the server will send the response 'Comment ID: ' followed by the value of the parameter in the URL. 
 3. Express.js Route Handlers Example 
 In this example, we will create a route with multiple route handlers. We will create a route that has multiple route handlers to handle the request. 
 // Path: comments.js
// create a server
var express = require('express');
var app = express();
var port = 3000;

// create a route with multiple route handlers
app.get('/comments', function(req, res, next) {
    console.log('First route handler');
    next();
}, function(req, res) {
    console.log('Second route handler');
    res.send('This is the comments page');
});

// start the server
app.listen(port, function() {
    console.log('Server started on http://localhost:' + port);
});
 
 In this example