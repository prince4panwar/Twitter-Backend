import express from "express";
import * as tweetController from "../../controller/tweet-controller.js";
import * as likeController from "../../controller/like-controller.js";
import * as commentController from "../../controller/comment-controller.js";
import * as userController from "../../controller/user-controller.js";
import {
  isAuthenticatedUser,
  validateHeader,
  validateUserAuth,
} from "../../middlewares/auth-request-validator.js";

const router = express.Router();

// Tweets routes
router.post("/tweets", isAuthenticatedUser, tweetController.createTweet);
router.get("/tweets/:id", tweetController.getTweet);
router.post("/likes/toggle", isAuthenticatedUser, likeController.toggleLike);
router.post("/comments", isAuthenticatedUser, commentController.createComment);

// User routes
router.post("/signup", userController.createUser);
router.post("/login", validateUserAuth, userController.login);
router.get("/users/:id", userController.getUserByID);
router.get("/users", userController.getUsers);
router.delete("/users/:id", userController.deleteUser);
router.get("/isAuthenticated", validateHeader, userController.isAuthenticated);

export default router;
