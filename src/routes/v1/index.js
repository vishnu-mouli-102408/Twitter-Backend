import express from "express";
const router = express.Router();

import {
  TweetController,
  LikeController,
  CommentController,
} from "../../controllers/index.js";

router.post("/tweets", TweetController.create);
router.post("/likes/toggle", LikeController.toggleLike);
router.post("/comments", CommentController.createComment);
router.get("/tweets/:id", TweetController.getWithComments);

export default router;
