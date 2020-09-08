// var mysql = require('mysql');
// var connection;

// if(process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
//   connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : "monkey416",
//     database : 'sequelize_geoMap'
//   });
// };

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   };

//   console.log('connected as id ' + connection.threadId);

// });

// module.exports = connection;

// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sequelize_geoMap", "root", "monkey416", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
