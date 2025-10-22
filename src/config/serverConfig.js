import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export default {
  PORT: process.env.PORT,
  SALT: bcrypt.genSaltSync(5),
  JWT_KEY: process.env.JWT_KEY,
};
