const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const connect = require("./config/databaseConfig");

const setUpAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
    await connect();
    console.log("MongoDB Connected");
  });
};

setUpAndStartServer();
