import { tweetRepo, hashtagRepo } from "../repository/index.js";

export const createTweet = async (data) => {
  try {
    const content = data.content;
    const tags = content
      .match(/#(\w+)/g)
      ?.map((hashtag) => hashtag.substring(1).toLowerCase());

    const tweet = await tweetRepo.createTweet(data);
    const alreadyPresentTags = await hashtagRepo.findByName(tags);
    const titleOfPresentTags = alreadyPresentTags?.map((tag) => tag.title);
    let uniqueTags = tags?.filter((tag) => !titleOfPresentTags.includes(tag));
    uniqueTags = uniqueTags?.map((uniqueTag) => ({
      title: uniqueTag,
      tweets: [tweet.id],
    }));
    await hashtagRepo.createBulkHashtag(uniqueTags);
    alreadyPresentTags?.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

export const getTweet = async (tweetId) => {
  try {
    const response = tweetRepo.getTweetWithComments(tweetId);
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};
