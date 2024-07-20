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
    console.log(authUser?.user?._id);
    // Create a new AiOutput document
    const result = new AiOutput({
      formData: formData,
      aiResponse: aiResp,
      name: name,
      user: new mongoose.Types.ObjectId(authUser), // Ensure the user ID is an ObjectId
    });

    const savedResult = await result.save();

    const hist = await User.findById(authUser);
    hist.history.push(savedResult._id);
    await hist.save();

    console.log("AiOutput saved and user history updated");
  } catch (error: any) {
    console.log("Error storing schema:", error);
  }
};
