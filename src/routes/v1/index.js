import express from "express";
import * as tweetController from "../../controller/tweet-controller.js";
import * as likeController from "../../controller/like-controller.js";
import * as commentController from "../../controller/comment-controller.js";
import * as userController from "../../controller/user-controller.js";

const router = express.Router();

// Tweets routes
router.post("/tweets", tweetController.createTweet);
router.get("/tweets/:id", tweetController.getTweet);
router.post("/likes/toggle", likeController.toggleLike);
router.post("/comments", commentController.createComment);

// User routes
router.post("/signup", userController.createUser);
router.get("/users/:id", userController.getUserByID);
router.get("/users", userController.getUsers);
router.delete("/users/:id", userController.deleteUser);

export default router;
