const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 6060;


const mysql = require('mysql');
// connection configurations
// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'meteoremAPI'
// });
 
// // connect to database
// mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js'); // importation des routes
routes(app); // enregistrement des routes
