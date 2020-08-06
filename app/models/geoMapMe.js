// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "geoMap" model that matches up with DB
var MapMe = sequelize.define("mapMe", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
//   latitude: Sequelize.INTEGER,
//   longitude: Sequelize.INTEGER,
  created_at: Sequelize.DATE
});

// Syncs with DB
MapMe.sync();

// Makes the Marker Model available for other files (will also create a table)
module.exports = MapMe;