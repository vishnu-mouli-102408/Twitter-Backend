import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    modelType: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    likeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "modelType",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;
