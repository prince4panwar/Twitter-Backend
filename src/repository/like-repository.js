import Like from "../models/like.js";

export const createLike = async (data) => {
  try {
    const like = await Like.create(data);
    return like;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findLikeById = async (likeId) => {
  try {
    const like = await Like.findById(likeId);
    return like;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findAllLike = async () => {
  try {
    const like = await Like.find({});
    return like;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const deleteLike = async (likeId) => {
  try {
    const like = await Like.findByIdAndDelete(likeId);
    return like;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const updateLike = async (likeId, likeData) => {
  try {
    const like = await Like.findByIdAndUpdate(likeId, likeData, { new: true }); // due to {new: true} it won't return me old document after updating
    return like;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findByUserAndLikeable = async (data) => {
  try {
    const like = await Like.findOne(data);
    return like;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};
