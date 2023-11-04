import { TweetService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

const tweetService = new TweetService();

export const create = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully Created a tweet",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Create tweet",
      err: error,
    });
  }
};
