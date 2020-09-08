// // Dependencies
// // =============================================================

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.json");

// // Creates a "geoMap" model that matches up with DB
// var MapMe = sequelize.define("mapMe", {
//   author: Sequelize.STRING,
//   body: Sequelize.STRING,
//   latitude: Sequelize.FLOAT,
//   longitude: Sequelize.FLOAT,
//   created_at: Sequelize.DATE
// });

// // Syncs with DB
// MapMe.sync();

// // Makes the Marker Model available for other files (will also create a table)
// module.exports = MapMe;

  
// 'use strict';
// module.exports = (sequelize, DataTypes) => {

//   const MapMe = sequelize.define('Mapme', {

//     author: Sequelize.STRING,
//     body: Sequelize.STRING,
//     latitude: Sequelize.FLOAT,
//     longitude: Sequelize.FLOAT,
//     created_at: Sequelize.DATE

// });

//     MapMe.sync(); 
  
// };

// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection");
// var Sequelize = require("sequelize");
// // Creates a "geoMap" model that matches up with DB
// var sequelize =  require("../config/connection");

// var MapMe = sequelize.define("mapMe", {
//   author: Sequelize.STRING,
//   body: Sequelize.STRING,
//   latitude: Sequelize.FLOAT,
//   longitude: Sequelize.FLOAT,
//   created_at: Sequelize.DATE
// });

// // Makes the Marker Model available for other files (will also create a table)
// module.exports = MapMe;

module.exports = function(sequelize, DataTypes) {
  var MapMe = sequelize.define("MapMe", {

    author: DataTypes.STRING,
    body: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    created_at: DataTypes.DATE

  });
  MapMe.sync({ force: true });
  return MapMe;
};

