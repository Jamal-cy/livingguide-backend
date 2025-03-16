import mongoose from "mongoose";

const attractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  contactInfo: { type: String, required: true },
  openingHours: { type: String, required: true },
  userRatings: { type: Number, default: 0 },
  address: { type: String, required: true },
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL or path to image
  attractions: [attractionSchema],
});

export const City = mongoose.model("City", citySchema);
