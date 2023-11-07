import { StatusCodes } from "http-status-codes";
import passport from "passport";

export const authenticate = (req, res, next) => {
  try {
    passport.authenticate("jwt", (err, user) => {
      if (err) next(err);
      if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Unauthorised Access",
        });
      }
      req.user = user;
      next();
    })(req, res, next);
  } catch (error) {
    console.log("error");
    throw error;
  }
};
