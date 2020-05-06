var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (burgerData) {
    console.log(burgerData);
    res.render("index", { burgers: burgerData });
  });
});

router.post("/", function (req, res) {
  burger.create(req.body.burger_name, () => {
    res.redirect("/");
  });
});

router.post("/:id", function (req, res) {
  burger.update(true, req.params.id, () => {
    res.redirect("/");
  });
});

module.exports = router;
