import { UserRepository } from "../repository/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      console.log("Error occured in Service Layer");
      throw error;
    }
  }

  comparePassword(inputPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(inputPassword, encryptedPassword);
    } catch (error) {
      console.log("Error occured in Service Layer");
      throw {
        message: "Incorrect Password",
      };
    }
  }

  generateJWTToken(user) {
    try {
      const response = jwt.sign(user, JWT_SECRET, { expiresIn: "2 days" });
      return response;
    } catch (error) {
      console.log("Something went wrong in Token Creation");
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      const user = await this.userRepository.getByEmail(email);
      const verifyPassword = this.comparePassword(password, user.password);
      if (!verifyPassword) {
        console.log("Password Doesn't Match");
        throw { error: "incorrect Password" };
      }
      const newToken = this.generateJWTToken({
        email: user.email,
        id: user._id,
      });
      return newToken;
    } catch (error) {
      console.log("Something went wrong in SignIn Process.");
      throw error;
    }
  }
}

export default UserService;
