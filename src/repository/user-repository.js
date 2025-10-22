import User from "../models/user.js";

export const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId, { email: 1, name: true });
    return user;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findAllUser = async () => {
  try {
    const user = await User.find({}, { email: 1, name: true });
    return user;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    return user;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    }); // due to {new: true} it won't return me old document after updating
    return user;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      email,
    });
    return user;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};
