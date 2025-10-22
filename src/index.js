import express from "express";
import config from "./config/serverConfig.js";
import connect from "./config/database.js";
import apiRoutes from "./routes/index.js";

const { PORT } = config;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server started at ${PORT}...`);
  await connect();
  console.log("Mongo db connected...");
});
