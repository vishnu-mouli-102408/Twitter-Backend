import { LikeService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelType,
      req.query.modelId,
      req.body.userId
    );
    return res.status(StatusCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully Liked a tweet",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't like the tweet",
      err: error,
    });
  }
};
