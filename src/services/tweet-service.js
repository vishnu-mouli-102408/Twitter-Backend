const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    try {
      const content = data.content;
      let tags = content.match(/#[a-zA-Z0-9_]+/g);
      // .map((tag) => tag.substring(1));
      tags = tags.map((tag) => tag.substring(1));
      const tweet = await this.tweetRepository.create(data);
      let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
      // .map((tag) => tag.title);
      alreadyPresentTags = alreadyPresentTags.map((tag) => tag.title);
      let newTags = tags.filter((tag) => !alreadyPresentTags.includes(tag));
      // .map((tag) => {
      //   return { title: tag, tweets: [tweet.id] };
      // });
      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });
      const response = await this.hashtagRepository.bulkCreate(newTags);
      return tweet;
    } catch (error) {
      console.log("Error Occurred in Service Layer");
      throw { error };
    }
  }
}

module.exports = TweetService;
