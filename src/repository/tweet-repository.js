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
    const tweet = await Tweet.findById(tweetId).populate({ path: "likes" });
    return tweet;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const getTweetById = async (tweetId) => {
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

export const deleteTweet = async (tweetId) => {
  try {
    const tweet = await Tweet.findByIdAndDelete(tweetId);
    return tweet;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const updateTweet = async (tweetId, tweetData) => {
  try {
    const tweet = await Tweet.findByIdAndUpdate(tweetId, tweetData, {
      new: true,
    }); // due to {new: true} it won't return me old document after updating
    return tweet;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};

export const getTweetWithComments = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId)
      .populate({
        path: "comments",
        populate: {
          path: "comments",
        },
      })
      .lean();
    return tweet;
  } catch (error) {
    console.log("Something went wrong in repository layer");
    throw error;
  }
};
