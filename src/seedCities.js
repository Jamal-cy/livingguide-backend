import mongoose from "mongoose";
import { City } from "./models/city.model.js"; // Adjust path if needed

// MongoDB connection string (replace with your own)
const MONGO_URI =
  "mongodb+srv://adedejimariam600:Uy2p7hEFqhnKeO4z@cityguidecluster.shnf9.mongodb.net/?retryWrites=true&w=majority&appName=CityGuideCluster";

const cities = [
  {
    name: "Lagos",
    description:
      "A bustling city known for its beaches, nightlife, and economic activity.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQvfvemF_cnZ32jfMR2bailic1t78LsO8D_neK8_2K1DF6-RH2kEli7Qy87xOb5Y_zj1WVqbAGCNtGt5I9V5pQNGc4PTq5Tnt8x_DxJaw",
    attractions: [
      {
        name: "Lekki Conservation Centre",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipMEh8i5OIVVu_1Lu-MpgNxSx1z7giJLTAmXu2De=w864-h499-n-k-no",
        description:
          "A nature reserve with the longest canopy walkway in Africa.",
        contactInfo: "+234 123 456 7890",
        openingHours: "8:00 AM - 6:00 PM",
        userRatings: 4.7,
        address: "Lekki, Lagos, Nigeria",
      },
      {
        name: "Nike Art Gallery",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipNA13g0DjpFR64OXnsNtW5IiAkMWYNi2qFCNEw=w864-h499-n-k-no",
        description:
          "A cultural hub showcasing traditional and contemporary Nigerian art.",
        contactInfo: "+234 987 654 3210",
        openingHours: "9:00 AM - 7:00 PM",
        userRatings: 4.8,
        address: "Lekki, Lagos, Nigeria",
      },
    ],
  },
  {
    name: "Abuja",
    description:
      "The capital city of Nigeria, known for its beautiful landscapes and government institutions.",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQMxyMbl8DbkDAfHT6A2K2YndqvOW73bIYxGR3knik5VYRFZ3OwfBnaEkvsoF-GFwEoj5pvitZJcRojEh_9qjXY7VmU9et_i5F1Toho8uM",
    attractions: [
      {
        name: "Aso Rock",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipO-1gMOM80ictZz4CrxNK412_LtNOb-CkL3UFkb=w864-h499-n-k-no",
        description:
          "A massive rock formation that dominates the Abuja landscape.",
        contactInfo: "+234 345 678 9012",
        openingHours: "Open 24 hours",
        userRatings: 4.6,
        address: "Aso Rock, Abuja, Nigeria",
      },
      {
        name: "Millennium Park",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipMXqlshI_u5xVXUIKbYz3nW1v8GGW8DPjm1Wn6H=w864-h499-n-k-no",
        description: "A large park perfect for relaxation and picnics.",
        contactInfo: "+234 567 890 1234",
        openingHours: "6:00 AM - 8:00 PM",
        userRatings: 4.5,
        address: "Maitama, Abuja, Nigeria",
      },
    ],
  },
];

// Function to insert cities into the database
const seedCities = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Clear existing cities
    await City.deleteMany();
    console.log("Existing cities deleted");

    // Insert new cities
    await City.insertMany(cities);
    console.log("Cities inserted successfully");

    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error inserting cities:", error);
    mongoose.connection.close();
  }
};

// Run the script
seedCities();
