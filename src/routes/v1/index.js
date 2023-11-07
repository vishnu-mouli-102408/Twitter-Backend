import express from "express";
const router = express.Router();

import {
  TweetController,
  LikeController,
  CommentController,
  UserController,
} from "../../controllers/index.js";

import { authenticate } from "../../middlewares/authenticate.js";

router.post("/tweets", authenticate, TweetController.create);
router.post("/likes/toggle", authenticate, LikeController.toggleLike);
router.post("/comments", authenticate, CommentController.createComment);
router.get("/tweets/:id", authenticate, TweetController.getWithComments);

router.post("/signup", UserController.signup);
router.post("/signin", UserController.signIn);

export default router;
