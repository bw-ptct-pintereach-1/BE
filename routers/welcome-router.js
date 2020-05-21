const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).send("<h1>HEY<h1>");
});
