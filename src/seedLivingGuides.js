import mongoose from "mongoose";
import { LivingGuide } from "./models/livingGuide.model.js";

const MONGO_URI = "mongodb+srv://oluwakemijamal10:Brandy2018@cluster0.q87b5.mongodb.net/livingguide?retryWrites=true&w=majority&appName=LivingGuide";

const livingGuides = [
  {
    title: "☀️ Solar Energy",
    description: "Discover how solar power can reduce costs, cut emissions, and create clean energy for your home.",
    image: "http://10.0.2.2:4000/images/SolarEnergy.jpg",
    attractions: [
      {
        name: "Solar Panel Basics",
        image: "http://10.0.2.2:4000/images/Solarpanelbasics.jpg",
        description: "Learn how solar panels work, their benefits, and tips for getting started with installation.",
      },
      {
        name: "Inverter Setup",
        image: "http://10.0.2.2:4000/images/invertersetup.jpg",
        description: "Set up solar inverters to efficiently convert sunlight into usable home energy.",
      },
    ],
  },
  {
    title: "💧 Water Conservation",
    description: "Smart ways to save water, cut waste, and protect this vital resource for the future.",
    image: "http://10.0.2.2:4000/images/waterconservation.jpg",
    attractions: [
      {
        name: "Rainwater Harvesting",
        image: "http://10.0.2.2:4000/images/rainwaterharvesting.jpg",
        description: "Capture and store rainwater to use for gardening, cleaning, or other household needs.",
      },
      {
        name: "Efficient Faucets",
        image: "http://10.0.2.2:4000/images/faucets.jpg",
        description: "Install water-saving faucets and fixtures to reduce daily water waste.",
      },
    ],
  },
  {
    title: "🌱 Urban Gardening",
    description: "Bring nature into your home with simple and creative gardening ideas for small spaces.",
    image: "http://10.0.2.2:4000/images/urbangardening.jpg",
    attractions: [
      {
        name: "Container Gardening",
        image: "http://10.0.2.2:4000/images/containergardening.jpg",
        description: "Learn how to grow flowers, vegetables, or herbs in pots and containers, perfect for balconies and patios.",
      },
      {
        name: "Herb Gardening",
        image: "http://10.0.2.2:4000/images/herbgardening.jpg",
        description: "Enjoy fresh flavors by growing your own herbs at home for cooking and tea.",
      },
    ],
  },
  {
    title: "🍎 Healthy Eating",
    description: "Delicious ideas and practical tips for eating well, staying energized, and living healthier.",
    image: "http://10.0.2.2:4000/images/healthyeating.jpg",
    attractions: [
      {
        name: "Balanced Diet Recipes",
        image: "http://10.0.2.2:4000/images/balancediet.jpg",
        description: "Step-by-step recipes that combine nutrients for tasty and wholesome meals.",
      },
      {
        name: "Superfoods",
        image: "http://10.0.2.2:4000/images/superfoods.jpg",
        description: "Explore nutrient-rich superfoods and how they boost energy, immunity, and overall health.",
      },
    ],
  },
  {
    title: "🏋️ Fitness & Exercise",
    description: "Fun and practical ways to stay active, boost energy, and improve overall health.",
    image: "http://10.0.2.2:4000/images/fitness.jpg",
    attractions: [
      {
        name: "Home Workouts",
        image: "http://10.0.2.2:4000/images/homeworkouts.jpg",
        description: "Easy-to-follow routines you can do at home without needing special equipment.",
      },
      {
        name: "Outdoor Fitness",
        image: "http://10.0.2.2:4000/images/outdoorfitness.jpg",
        description: "Enjoy fresh air while staying fit with activities like running, cycling, or yoga in the park.",
      },
    ],
  },
  {
    title: "📘 Learning & Growth",
    description: "Resources and tips to support education, skill building, and personal development.",
    image: "https://picsum.photos/seed/education/800/600",
    attractions: [
      {
        name: "STEM Resources",
        image: "https://picsum.photos/seed/stem/800/600",
        description: "Explore tutorials and guides for Science, Technology, Engineering, and Mathematics.",
      },
      {
        name: "Language Learning",
        image: "https://picsum.photos/seed/languages/800/600",
        description: "Boost communication skills with resources for English, French, and local languages.",
      },
      {
        name: "Career Development",
        image: "https://picsum.photos/seed/career/800/600",
        description: "Learn CV writing, job interview tips, and strategies for professional growth.",
      },
    ],
  },
  {
    title: "🌍 Eco-Friendly Living",
    description: "Simple and effective ways to reduce waste, save resources, and make daily life more sustainable.",
    image: "https://picsum.photos/seed/eco/800/600",
    attractions: [
      {
        name: "Recycling Tips",
        image: "https://picsum.photos/seed/recycle/800/600",
        description: "Learn easy steps to sort and recycle materials properly, helping reduce landfill waste.",
      },
      {
        name: "Eco-friendly Products",
        image: "https://picsum.photos/seed/ecoproducts/800/600",
        description: "Discover everyday products made from sustainable materials that are better for you and the planet.",
      },
    ],
  },
  {
    title: "✈️ Sustainable Travel",
    description: "Discover eco-friendly ways to explore the world, from local journeys to international adventures, while reducing your environmental impact.",
    image: "https://picsum.photos/seed/travel/800/600",
    attractions: [
      {
        name: "Public Transportation",
        image: "https://picsum.photos/seed/localtravel/800/600",
        description: "Use buses, trains, and subways to cut carbon emissions and experience destinations like a local.",
      },
      {
        name: "International Travel",
        image: "https://picsum.photos/seed/international/800/600",
        description: "Plan greener trips abroad with sustainable flights, eco-friendly hotels, and responsible tourism tips.",
      },
    ],
  },
];


export default livingGuides;

const seedLivingGuides = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    await LivingGuide.deleteMany();
    console.log("Existing guides deleted");
    await LivingGuide.insertMany(livingGuides);
    console.log("Living guides inserted successfully");
    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error inserting living guides:", error);
    mongoose.connection.close();
  }
};

seedLivingGuides();
