import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelType, modelId, userId) {
    try {
      if (modelType == "Tweet") {
        var likeable = await this.tweetRepository.find(modelId);
      } else if (modelType == "Comment") {
      } else {
        throw new Error("Unknown Model Type");
      }
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw error;
    }

    const exists = await this.likeRepository.findByUserAndLikeable({
      modelType: modelType,
      likeId: modelId,
      user: userId,
    });

    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.deleteOne();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        modelType: modelType,
        likeId: modelId,
        user: userId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;
