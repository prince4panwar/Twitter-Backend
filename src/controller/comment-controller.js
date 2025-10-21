import * as services from "../services/comment-service.js";

export const createComment = async (req, res) => {
  try {
    const response = await services.createComment(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(201).json({
      data: response,
      success: true,
      err: {},
      message: "Comment is created successfully",
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
