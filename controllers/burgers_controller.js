var express = require("express");
var burger = require("../models/burger");

// Create the router for the app
var router = express.Router();

// routes

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  })
})

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.devourBurger({
    devoured: true
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.post("/api/burgers", function (req, res) {
  console.log("got to post")
  burger.createBurger([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new burger
    console.log("created burger");
    res.json({ id: result.insertId });
  });
});

router.post("/api/burgers/custom", function (req, res) {
  burger.customizeBurger([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new burger
    console.log("created custom burger");
    res.json({ id: result.insertId });
  });
});

// Export routes for server.js to use.
module.exports = router;