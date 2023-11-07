import { UserService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(StatusCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully Created User",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Create User",
      err: error,
    });
  }
};
