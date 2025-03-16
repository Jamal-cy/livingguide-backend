import { City } from "../models/city.model.js";

// Get all cities
export const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cities", error });
  }
};

// Get a single city by ID
export const getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) return res.status(404).json({ message: "City not found" });
    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: "Error fetching city", error });
  }
};

// Add a new city
export const addCity = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const city = new City({ name, description, image });
    await city.save();
    res.status(201).json({ message: "City added successfully", city });
  } catch (error) {
    res.status(500).json({ message: "Error adding city", error });
  }
};

export const searchCityByName = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: "City name is required" });
    }
    console.log(name);

    const city1 = await City.findOne({
      name,
    });
    console.log(city1);
    

    const city = await City.findOne({
      name: { $regex: new RegExp(name, "i") },
    });

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json(city);
  } catch (error) {
    console.error("Error searching for city:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
