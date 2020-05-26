const jwt = require("jsonwebtoken");

function restrict() {
  return async (req, res, next) => {
    const tokenError = {
      message: "Invalid Credentials",
    };

    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json(tokenError );
      }
      await jwt.verify(token, process.env.SECRET, (err, decodedPayload) => {
        if (err) {
          return res.status(401).json(tokenError );
        }
        req.token = decodedPayload;
        next();
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = restrict;
