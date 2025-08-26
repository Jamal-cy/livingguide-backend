import { LivingGuide } from "../models/livingGuide.model.js"; 

// Get all living guides
export const getLivingGuides = async (req, res) => {
  try {
    const guides = await LivingGuide.find();
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ message: "Error fetching living guides", error });
  }
};

// Get a single guide by ID
export const getLivingGuideById = async (req, res) => {
  try {
    const guide = await LivingGuide.findById(req.params.id);
    if (!guide) return res.status(404).json({ message: "Living guide not found" });
    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ message: "Error fetching living guide", error });
  }
};

// Add a new living guide
export const addLivingGuide = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const guide = new LivingGuide({ title, description, imageUrl });
    await guide.save();
    res.status(201).json({ message: "Living guide added successfully", guide });
  } catch (error) {
    res.status(500).json({ message: "Error adding living guide", error });
  }
};

// Search guide by name/title
export const searchLivingGuideByName = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const guide = await LivingGuide.findOne({
      title: { $regex: new RegExp(title, "i") },
    });

    if (!guide) {
      return res.status(404).json({ message: "Living guide not found" });
    }

    res.status(200).json(guide);
  } catch (error) {
    console.error("Error searching for living guide:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
