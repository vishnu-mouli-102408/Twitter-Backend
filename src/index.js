import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config/serverConfig.js";
import { connect } from "./config/databaseConfig.js";

import apiRoutes from "./routes/index.js";

// import { TweetService } from "./services/index.js";

const setUpAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
    await connect();
    console.log("MongoDB Connected");

    // const ser = new TweetService();
    // const tweet = await ser.create({ content: "This is a #refactor code" });
  });
};

setUpAndStartServer();
