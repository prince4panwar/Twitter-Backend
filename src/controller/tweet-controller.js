import * as services from "../services/tweet-service.js";

export const createTweet = async (req, res) => {
  try {
    const { content } = req.body;
    const response = await services.createTweet({ content });
    return res.status(201).json({
      data: response,
      success: true,
      err: {},
      message: "Tweet is created successfully",
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Tweet is not created",
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await services.getTweet(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Tweet is fetched successfully",
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Tweet is not created",
    });
  }
};
