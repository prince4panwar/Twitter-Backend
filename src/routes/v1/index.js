import express from "express";
import * as tweetController from "../../controller/tweet-controller.js";
import * as likeController from "../../controller/like-controller.js";
import * as commentController from "../../controller/comment-controller.js";

const router = express.Router();

router.post("/tweets", tweetController.createTweet);
router.post("/likes/toggle", likeController.toggleLike);
router.post("/comments", commentController.createComment);

export default router;
