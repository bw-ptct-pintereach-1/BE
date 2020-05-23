const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).send("<h1>Welcome To Pintreach!!<h1> ");
});

module.exports = router;
