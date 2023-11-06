import { CommentService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const response = await commentService.createComment(
      req.query.modelType,
      req.query.modelId,
      req.body.userId,
      req.body.content
    );
    return res.status(StatusCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully Commented ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Create Comment",
      err: error,
    });
  }
};
