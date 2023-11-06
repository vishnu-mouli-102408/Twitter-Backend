import Comment from "../models/comment.js";
import CrudRepository from "./crud-repository.js";

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }

  async find(id) {
    try {
      const response = await Comment.findById(id).populate({ path: "likes" });
      return response;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}

export default CommentRepository;
