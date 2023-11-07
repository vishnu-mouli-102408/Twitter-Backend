import { TweetService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

import { upload, handleUpload } from "../config/upload-config.js";

const singleUploader = upload.single("image");

const tweetService = new TweetService();

export const create = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      console.log("Data", data);
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      const payload = { ...req.body };
      payload.image = cldRes.url;
      // console.log("Payload", payload);
      const response = await tweetService.create(payload);
      return res.status(201).json({
        success: true,
        message: "Successfully created a new tweet",
        data: response,
        err: {},
      });
    });
    // const response = await tweetService.create(req.body);
    // return res.status(StatusCodes.CREATED).json({
    //   data: response,
    //   success: true,
    //   message: "Successfully Created a tweet",
    //   err: {},
    // });
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

export const getWithComments = async (req, res) => {
  try {
    const response = await tweetService.getWithComments(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully Fetched a tweets",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Fetch tweets",
      err: error,
    });
  }
};
