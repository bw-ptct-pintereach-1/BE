const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 5000;
const welcomeRouter = require("./routers/welcome-router");


server.use(helmet());
server.use(cors());
server.use(express.json());

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    errorMessage: "Server Error",
  });
});


server.use("/",welcomeRouter);

if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}


module.exports = server;
