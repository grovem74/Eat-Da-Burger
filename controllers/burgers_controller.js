var express = require("express");
var burger = require("../models/burger")

// Create the router for the app
var router = express.Router();

// routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var test = "test burger";
      var hbsObject = {
        burgers: data
      };
      console.log("hbsObject:", hbsObject);
      res.render("index", hbsObject);
    });
  });


// Export routes for server.js to use.
module.exports = router;