"use server";
import mongoose from "mongoose";
import AiOutput from "./schema";
import User from "./userSchema"; // Assuming this is the correct path to your User model
import dbConnection from "./db";
import { auth } from "@/auth";

export const storeSchema = async (
  formData: any,
  aiResp: string,
  name: string
) => {
  dbConnection();
  try {
    const authUser = await auth();
    const userId = authUser?.user?._id;

    if (!userId) {
      throw new Error("User not authenticated");
    }

    console.log(userId);
    // Create a new AiOutput document
    const result = new AiOutput({
      formData: formData,
      aiResponse: aiResp,
      name: name,
      user: new mongoose.Types.ObjectId(userId), // Ensure the user ID is an ObjectId
    });

    const savedResult = await result.save();

    const hist = await User.findById(userId);
    if (hist) {
      hist.history.push(savedResult._id);
      await hist.save();
      console.log("AiOutput saved and user history updated");
    } else {
      throw new Error("User not found");
    }
  } catch (error: any) {
    console.log("Error storing schema:", error);
  }
};
