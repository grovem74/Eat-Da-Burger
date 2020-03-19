var express = require("express");
var burger = require("../models/burger.js");

// Create the router for the app
var router = express.Router();

// routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// router.get("/", function (req, res) {
//   burger.selectAll(function (data) {
//     var hbsObject = {
//       burgers: data[1]
//     };
//     res.render("index", hbsObject);
//   });
// });

router.post("/api/burgers", function (req, res) {
  burger.createBurger([
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