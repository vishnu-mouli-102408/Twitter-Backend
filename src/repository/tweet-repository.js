const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async destroy(id) {
    try {
      const response = await Tweet.findByIdAndRemove(id);
      return response;
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
}

module.exports = TweetRepository;
