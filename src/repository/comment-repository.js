import Comment from "../models/comment.js";

export const createComment = async (data) => {
  try {
    const comment = await Comment.create(data);
    return comment;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findCommentById = async (commentId) => {
  try {
    const comment = await Comment.findById(commentId);
    return comment;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findAllComment = async () => {
  try {
    const comment = await Comment.find({});
    return comment;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const comment = await Comment.findByIdAndDelete(commentId);
    return comment;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const updateComment = async (commentId, commentData) => {
  try {
    const comment = await Comment.findByIdAndUpdate(commentId, commentData, {
      new: true,
    }); // due to {new: true} it won't return me old document after updating
    return comment;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};
