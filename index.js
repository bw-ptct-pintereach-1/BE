const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const cors = require("cors");
const welcomeRouter = require("./routers/welcome-router");
const authRouter = require("./auth/auth-router");
const userRouter = require("./routers/users-router");
const articleRouter = require("./routers/articles_router");
const authenticate = require("./auth/restrict-middleware");
const cookieParser = require("cookie-parser");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(helmet());
server.use(cors({
  credentials: true
}));
server.use(express.json());
server.use(cookieParser());

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    errorMessage: "Server Error",
  });
});

server.use("/", welcomeRouter);
server.use("/auth", authRouter);
server.use("/articles", articleRouter)
server.use("/user", userRouter)

if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = server;
