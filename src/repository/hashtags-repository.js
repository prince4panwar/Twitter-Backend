import Hashtag from "../models/hashtags.js";

export const createHashtag = async (data) => {
  try {
    const hashtag = await Hashtag.create(data);
    return hashtag;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const createBulkHashtag = async (data) => {
  try {
    const hashtag = await Hashtag.insertMany(data);
    return hashtag;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findAllHashtag = async () => {
  try {
    const hashtag = await Hashtag.find({});
    return hashtag;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findByName = async (titleList) => {
  try {
    const hashtags = await Hashtag.find({
      title: titleList,
    });
    return hashtags;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};
