import mongoose from "mongoose";

const aiOutputSchema = new mongoose.Schema(
  {
    formData: {
      type: Map,
      of: String,
      required: true,
    },
    aiResponse: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const AiOutput =
  mongoose.models.GeneratedData ||
  mongoose.model("GeneratedData", aiOutputSchema);

export default AiOutput;
