const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../helpers/user-model");
const jwt = require("jsonwebtoken");
const restrict = require("./restrict-middleware");

router.post("/register", async (req, res, next) => {
  try {
    const { username } = req.body;
    const newUser = await Users.findBy({ username }).first();
    if (newUser) {
      return res.status(409).json({
        message: "Username already in use",
      });
    }

    res.status(201).json(await Users.add(req.body));
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const userAuthError = {
    message: "Invalid Username please try again",
  };
  const passwordAuthError = {
    message: "Invalid Passowrd please try again",
  };

  try {
    const user = await Users.findBy({ username: req.body.username }).first();

    if (!user) {
      return res.status(401).json(userAuthError);
    }
    const passwordValid = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordValid) {
      return res.status(401).json(passwordAuthError);
    }

    const token = generateToken(user);
    res.json({
      message: `Welcome ${user.username}!`,
      token: token,
      user_id: user.id,
    });
  } catch (err) {
    next(err);
  }
});

// router.delete("/logout", restrict(), async (req, res, next) => {
//   try {
//     res.destroy("token");
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });

function generateToken(user) {
  const tokenPayload = {
    tokenId: user.id,
    user: user.username,
  };

  const token = jwt.sign(tokenPayload, process.env.SECRET, {
    expiresIn: "120m",
  });

  return token;
}

module.exports = router;
