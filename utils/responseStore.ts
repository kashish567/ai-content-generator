"use server";
import AiOutput from "./schema";
import dbConnection from "./db";

export const storeSchema = async (formData: any, aiResp: string) => {
  dbConnection();
  try {
    const result = new AiOutput({
      formData: formData,
      aiResponse: aiResp,
      // templateSlug: "test",
    });
    await result.save();
  } catch (error: any) {
    console.log(error);
  }
};
