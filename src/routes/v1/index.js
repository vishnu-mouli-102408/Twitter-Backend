import express from "express";
const router = express.Router();

import { TweetController, LikeController } from "../../controllers/index.js";

router.post("/tweets", TweetController.create);
router.post("/likes/toggle", LikeController.toggleLike);

export default router;
