import * as services from "../services/like-service.js";

export const toggleLike = async (req, res) => {
  try {
    const response = await services.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Like is toggled successfully",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Something went wrong",
    });
  }
};
