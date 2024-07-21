import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AiOutput",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose?.models?.User || mongoose.model("User", userSchema);

export default User;
