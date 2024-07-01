import mongoose from 'mongoose';

const aiOutputSchema = new mongoose.Schema({
  formData: {
    type: Map,
    of: String,
    required: true
  },
  aiResponse: {
    type: String,
  }
}, { timestamps: true });

const AiOutput = mongoose.models.AiOutput || mongoose.model('AiOutput', aiOutputSchema);

export default AiOutput;
