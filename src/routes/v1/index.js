import express from "express";
const router = express.Router();

import { TweetController } from "../../controllers/index.js";

router.post("/tweets", TweetController.create);

export default router;
