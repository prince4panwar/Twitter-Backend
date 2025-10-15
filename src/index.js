import config from "./config/serverConfig.js";
import express from "express";
import connect from "./config/database.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(config.PORT, async () => {
  console.log(`Server started at ${config.PORT}...`);
  await connect();
  console.log("Mongo db connected...");
});
