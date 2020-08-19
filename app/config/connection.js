// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
const sequelize = require("sequelize");
var connection;

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize("sequelize_geoMap", "root", "helloworld", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

if (process.env.JAWSDB_URL) {
  connection = sequelize.createConnection(process.env.JAWSDB_URL)
} else {
  connection = sequelize.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'helloworld',
    database: 'sequelize_geoMap'
  });
};

connection.connect();
// Exports the connection for other files to use
module.exports = sequelize;
