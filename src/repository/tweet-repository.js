import Tweet from "../models/tweet.js";

export const createTweet = async (data) => {
  try {
    const tweet = await Tweet.create(data);
    return tweet;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findTweetById = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);
    return tweet;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const findAllTweet = async () => {
  try {
    const tweet = await Tweet.find({});
    return tweet;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};
