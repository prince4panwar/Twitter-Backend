import jwt from "jsonwebtoken";
import config from "../config/serverConfig.js";
import * as userRepo from "../repository/user-repository.js";

const { JWT_KEY } = config;

export const validateUserAuth = (req, res, next) => {
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Email and password are required",
      err: "Email and password are missing in the request",
    });
  }
  next();
};

export const validateHeader = async (req, res, next) => {
  if (!req.headers || !req.headers["x-access-token"]) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Token is required inside headers",
      err: "Token is missing in the request header",
    });
  }
  next();
};

export const isAuthenticatedUser = async (req, res, next) => {
  try {
    if (!req.headers || !req.headers["x-access-token"]) {
      return res.status(400).json({
        success: false,
        data: {},
        message: "Token is required inside headers",
        err: "Token is missing in the request header",
      });
    }

    const response = jwt.verify(req.headers["x-access-token"], JWT_KEY);

    if (!response) {
      throw { error: "Unauthorized: Invalid token" };
    }

    const user = await userRepo.getUserByEmail(response.email);
    if (!user) {
      throw { error: "Unauthorized: Invalid token" };
    }

    req.userId = user.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: error,
    });
  }
};
