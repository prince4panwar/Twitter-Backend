import { commentRepo, tweetRepo } from "../repository/index.js";

export const createComment = async (modelId, modelType, userId, content) => {
  if (modelType == "Tweet") {
    var commentable = await tweetRepo.getTweetById(modelId);
  } else if (modelType == "Comment") {
    var commentable = await commentRepo.findCommentById(modelId);
  } else {
    throw new Error("Unknown model type");
  }

  const comment = await commentRepo.createComment({
    content: content,
    userId: userId,
    onModel: modelType,
    commentable: modelId,
    comments: [],
  });

  commentable.comments.push(comment);
  await commentable.save();

  return comment;
};
