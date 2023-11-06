import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async createComment(modelType, modelId, userId, content) {
    try {
      if (modelType == "Tweet") {
        var commentable = await this.tweetRepository.get(modelId);
      } else if (modelType == "Comment") {
        var commentable = await this.commentRepository.get(modelId);
      } else {
        throw new Error("Unknown Model Type");
      }
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw error;
    }

    const comment = await this.commentRepository.create({
      modelType: modelType,
      content: content,
      commentId: modelId,
      user: userId,
      comments: [],
    });

    commentable.comments.push(comment);
    await commentable.save();
    return comment;
  }
}

export default CommentService;
