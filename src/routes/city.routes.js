import express from "express";
import {
  getCities,
  getCityById,
  addCity,
  searchCityByName,
} from "../controllers/city.controller.js";

const router = express.Router();

router.get("/", getCities); // Get all cities
router.get("/search", searchCityByName);
router.get("/:id", getCityById); // Get city by ID
router.post("/", addCity); // Add a new city

export default router;
