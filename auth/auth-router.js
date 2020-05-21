const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/user-model");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res, next) => {
  try {
    const { username } = req.body;
    const newUser = await Users.findBy({ username }).first();
    if (newUser) {
      return res.status(409).json({
        message: "Username already in use",
      });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const authError = {
    message: "Invalid credentials",
  };

  try {
    const { username, password } = req.body;
    const user = Users.findBy({ username }).first();
    const passwordValid = bcrypt.compare(password,user.password)
    if(!user || !passwordValid){
      return res.status(401).json(authError);
    }


    
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

function generateToken(user){
  const tokenPayload = {
    userId:user.id,
  }
  const token = jwt.sign(tokenPayload,process.env.SECRET)
}