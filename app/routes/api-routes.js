// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var MapMe = require("../models/mapMe.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all maps
  app.get("/api/all", function(req, res) {

    // Finding all maps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    MapMe.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a to map feed
  app.post("/api/new", function(req, res) {

    console.log("Map Data:");
    console.log(req.body);

    MapMe.create({
      author: req.body.author,
      body: req.body.body,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      created_at: req.body.created_at
    }).then(function(results) {
      console.log("result:", results);
      // `results` here would be the newly created Map location and comment.
      res.end();
    }).catch(function(err){
      console.log("error:", err);
    });

  });

};
