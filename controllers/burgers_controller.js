var express = require("express");
var burger = require("../models/burger.js");

// Create the router for the app
var router = express.Router();

// routes
router.get("/", function (req, res) {console.log(burger)
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.selectAll(function(data){
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  })
})

router.put("/api/burgers/:id", function (req, res) {console.log("got to put")
// var burgerId = req.params.id
burger.devourBurger({
  devoured: req.body.devoured
})
  // burger.devourBurger(function (data) {

    // var hbsObject = {
    //   burgers: data
    // };
    // res.render("index", hbsObject);
  // });
});

router.post("/api/burgers", function (req, res) {console.log("got to post")
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

// Export routes for server.js to use.
module.exports = router;