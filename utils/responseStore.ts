"use server";
import mongoose from "mongoose";
import AiOutput from "./schema";
import User from "./userSchema"; // Assuming this is the correct path to your User model
import dbConnection from "./db";

export const storeSchema = async (formData: any, aiResp: string, name: string, user: string) => {
  dbConnection();
  try {
    // Create a new AiOutput document
    const result = new AiOutput({
      formData: formData,
      aiResponse: aiResp,
      name: name,
      user: new mongoose.Types.ObjectId(user), // Ensure the user ID is an ObjectId
    });

    const savedResult = await result.save();

    await User.findByIdAndUpdate(user, {
      $push: { history: savedResult._id },
    });

    console.log("AiOutput saved and user history updated");
  } catch (error: any) {
    console.log("Error storing schema:", error);
  }
};
