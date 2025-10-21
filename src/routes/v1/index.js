import express from "express";
import * as tweetController from "../../controller/tweet-controller.js";
import * as likeController from "../../controller/like-controller.js";

const router = express.Router();

router.post("/tweets", tweetController.createTweet);
router.post("/likes/toggle", likeController.toggleLike);

export default router;
