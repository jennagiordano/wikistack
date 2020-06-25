const express = require("express");
const router = express.Router();
const wikiPage = require("../views/wikipage");
const addPage = require("../views/addPage");

router.get("/", async (req, res, next) => {
  try {
    res.send(wikiPage(""));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send(req.body);
  } catch (error) {
    next(error);
  }
});

router.get("/add", async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
