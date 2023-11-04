import { TweetService } from "../services/index.js";

const tweetService = new TweetService();

export const create = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully Created a tweet",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Create tweet",
      err: error,
    });
  }
};
