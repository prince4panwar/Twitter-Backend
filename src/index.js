import express from "express";
import config from "./config/serverConfig.js";
import connect from "./config/database.js";
import apiRoutes from "./routes/index.js";
import { tweetRepo, userRepo } from "./repository/index.js";
import { toggleLike } from "./services/like-service.js";

const { PORT } = config;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server started at ${PORT}...`);
  await connect();
  console.log("Mongo db connected...");

  // const tweets = await tweetRepo.findAllTweet();
  // const users = await userRepo.findAllUser();

  // const user = await userRepo.createUser({
  //   email: "prince@admin.com",
  //   password: "12345",
  //   name: "Prince",
  // });

  // await toggleLike(tweets[0].id, "Tweet", users[0].id);
});
