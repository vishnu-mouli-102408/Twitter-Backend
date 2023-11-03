const Hashtag = require("../models/hashtags");

class HashtagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async bulkCreate(data) {
    try {
      const response = await Hashtag.insertMany(data);
      return response;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async get(id) {
    try {
      const hashtag = await Hashtag.findById(id);
      return hashtag;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async destroy(id) {
    try {
      const response = await Hashtag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async getAll(offset, limit) {
    try {
      const response = await Hashtag.find().skip(offset).limit(limit);
      return response;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }

  async findByName(titleList) {
    try {
      const response = await Hashtag.find({
        title: titleList,
      }).select("title -_id");
      return response;
    } catch (error) {
      console.log("Error Occurred in Repository Layer");
      throw { error };
    }
  }
}

module.exports = HashtagRepository;
