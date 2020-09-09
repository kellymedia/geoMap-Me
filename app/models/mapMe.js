
var Sequelize = require("sequelize");

var sequelize = require("../config/connection");

// Creates a "geoMap" model that matches up with DB
var MapMe = sequelize.define("mapMe", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
  created_at: Sequelize.DATE
});

// Syncs with DB
MapMe.sync();

module.exports = MapMe;
