const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const layout = require("../views/layout");

// router.use(express.json());

router.get("/", (req, res, next) => {
  res.send(layout("This is the page with CSS"));
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

router.post("/", (req, res, next) => {
  res.json(req.body);
});

// router.use(function (req, res, next) {
//   next();
// });

module.exports = router;
