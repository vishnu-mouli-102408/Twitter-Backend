import JWT from "passport-jwt";
import { JWT_SECRET } from "./serverConfig.js";
import User from "../models/user.js";

const strategy = JWT.Strategy;
const extractJWT = JWT.ExtractJwt;

const options = {
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

export const passportAuth = (passport) => {
  passport.use(
    new strategy(options, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};
