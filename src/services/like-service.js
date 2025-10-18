import { tweetRepo, likeRepo } from "../repository/index.js";

export const toggleLike = async (modelId, modelType, userId) => {
  //  /api/v1/likes/toggle?id=modelId&type=modelType
  if (modelType == "Tweet") {
    var likeable = await tweetRepo.findTweetById(modelId);
  } else if (modelType == "Comment") {
    //Todo
  } else {
    throw new Error("Unknown model type");
  }
  const exists = await likeRepo.findByUserAndLikeable({
    user: userId,
    onModel: modelType,
    likeable: modelId,
  });

  if (exists) {
    likeable.likes.pull(exists.id);
    await likeable.save();
    await exists.deleteOne();
    var isAdded = false;
  } else {
    const newLike = await likeRepo.createLike({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    likeable.likes.push(newLike);
    await likeable.save();
    isAdded = true;
  }

  return isAdded;
};
