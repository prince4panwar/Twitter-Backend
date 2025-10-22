import * as userService from "../services/user-service.js";

export const createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const response = await userService.createUser({ email, password, name });
    return res.status(201).json({
      data: response,
      message: "User created successfully",
      success: true,
      err: {},
    });
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

export const getUserByID = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await userService.getUserById(userId);
    return res.status(200).json({
      data: response,
      message: "User fetched successfully",
      success: true,
      err: {},
    });
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

export const getUsers = async (req, res) => {
  try {
    const response = await userService.getUsers();
    return res.status(200).json({
      data: response,
      message: "Users fetched successfully",
      success: true,
      err: {},
    });
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

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await userService.deleteUser(userId);
    return res.status(200).json({
      data: response,
      message: "User deleted successfully",
      success: true,
      err: {},
    });
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await userService.login(email, password);
    return res.status(201).json({
      data: response,
      message: "User logged in successfully",
      success: true,
      err: {},
    });
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
