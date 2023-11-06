import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({
          path: "comments",
          populate: {
            path: "comments",
          },
        })
        .lean();
      return tweet;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async getAll(offset, limit) {
    try {
      const response = await Tweet.find().skip(offset).limit(limit);
      return response;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async find(id) {
    try {
      const response = await Tweet.findById(id).populate({ path: "likes" });
      return response;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}

export default TweetRepository;
