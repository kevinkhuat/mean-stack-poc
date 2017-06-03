
var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/test';
mongoose.connect(dbURI);

var dbURIlog = 'mongodb://localhost/testLog';
var logDB = mongoose.createConnection(dbURIlog);


mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

logDB.on('connected', function() {
  console.log('Mongoose connected to ' + dbURIlog);
});

logDB.close(function() {
  console.log('Mongoose log disconnected');
});


require('./locations');


