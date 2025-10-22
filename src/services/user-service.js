import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/serverConfig.js";
import * as userRepo from "../repository/user-repository.js";

const { SALT, JWT_KEY } = config;

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
    // step 1 --> fetch the user using the email
    const user = await userRepo.getUserByEmail(email);
    if (!user) {
      console.log("Email doesn't match");
      throw { error: "User does not exit" };
    }

    // step 2 --> compare incoming plain password with stores encrypted password
    const passwordMatch = bcrypt.compareSync(plainPassword, user.password);
    if (!passwordMatch) {
      console.log("Password doesn't match");
      throw { error: "Incorrect password" };
    }

    // step 3 --> if password matches then generate a token and send it to the user
    const token = jwt.sign({ email: user.email, id: user.id }, JWT_KEY, {
      expiresIn: 60,
    });
    return token;
  } catch (error) {
    console.log("Something went wrong on service level");
    throw error;
  }
}
