import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/serverConfig.js";
import * as userRepo from "../repository/user-repository.js";

const { SALT } = config;

export async function createUser(userData) {
  try {
    const { password } = userData;
    const encryptedPassword = bcrypt.hashSync(password, SALT);

    const user = await userRepo.createUser({
      ...userData,
      password: encryptedPassword,
    });
    return user;
  } catch (error) {
    console.log("Something went wrong on service level");
    throw error;
  }
}

export async function getUsers() {
  try {
    const users = await userRepo.findAllUser();
    return users;
  } catch (error) {
    console.log("Something went wrong on repository level");
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const users = userRepo.findUserById(userId);
    return users;
  } catch (error) {
    console.log("Something went wrong on repository level");
    throw error;
  }
}

export async function deleteUser(userId) {
  try {
    const response = userRepo.deleteUser(userId);
    return response;
  } catch (error) {
    console.log("Something went wrong on service level");
    throw error;
  }
}

export async function login(email, plainPassword) {
  try {
  } catch (error) {
    console.log("Something went wrong on service level");
    throw error;
  }
}
