import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async getByEmail(userEmail) {
    try {
      const response = await User.findOne({
        email: userEmail,
      }).exec();
      if (!response) {
        throw {
          message: "Check Your Email",
        };
      }
      return response;
    } catch (error) {
      console.log("Error Occured in Repository Layer");
      throw error;
    }
  }
}

export default UserRepository;
