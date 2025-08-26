import mongoose from "mongoose";

const attractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  contactInfo: { type: String },
  address: { type: String }
});

const livingGuideSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    attractions: [attractionSchema] // Array of attraction objects
  },
  { timestamps: true }
);

export const LivingGuide = mongoose.model("LivingGuide", livingGuideSchema);
