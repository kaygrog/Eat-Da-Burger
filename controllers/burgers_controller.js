var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// TODO
// Create the router for the app, and export the router at the end of your file.
router.get("/", function (req, res) {
  // burger.all(function (data) {
  //   var hbsObject = {
  //     burgers: data,
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
  res.render("index");
});

module.exports = router;
