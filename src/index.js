import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config/serverConfig.js";
import { connect } from "./config/databaseConfig.js";
import passport from "passport";

import { passportAuth } from "./config/passportJwtConfig.js";

import apiRoutes from "./routes/index.js";

const setUpAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  passportAuth(passport);

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
    await connect();
    console.log("MongoDB Connected");
  });
};

setUpAndStartServer();
