var express = require("express");
var burger = require("../models/burger.js")

// Create the router for the app
var router = express.Router();

// routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log("hbsObject:", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, 0
  ], function (result) {
    // Send back the ID of the new burger
    console.log("created burger");
    res.json({ id: result.insertId });
  });
});

// Export routes for server.js to use.
module.exports = router;