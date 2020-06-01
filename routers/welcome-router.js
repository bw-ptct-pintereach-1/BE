const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    message:"WELCOME TO PINTREACH 1!!!"
  });
});

module.exports = router;
