"use server";
import AiOutput from "./schema";
import dbConnection from "./db";

export const storeSchema = async (
  formData: any,
  aiResp: string,
  name: string
) => {
  dbConnection();
  try {
    console.log(name);
    const result = new AiOutput({
      formData: formData,
      aiResponse: aiResp,
      name: name,
      // templateSlug: "test",
    });
    await result.save();
  } catch (error: any) {
    console.log(error);
  }
};
