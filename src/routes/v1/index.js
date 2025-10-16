import express from "express";
import * as controller from "../../controller/tweet-controller.js";
const router = express.Router();

router.post("/tweets", controller.createTweet);

export default router;
