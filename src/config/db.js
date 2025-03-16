import mongoose from "mongoose";

export default function connectDb() {
  // Get the MongoDB connection URL from environment variables
  const dbUrl =
    "mongodb+srv://adedejimariam600:Uy2p7hEFqhnKeO4z@cityguidecluster.shnf9.mongodb.net/?retryWrites=true&w=majority&appName=CityGuideCluster";

  if (!dbUrl) {
    console.error("Database URL is not defined in the environment variables");
    process.exit(1); // Exit the process with an error code
  }

  // Connect to MongoDB without deprecated options
  mongoose
    .connect(dbUrl)
    .then(() => console.log("CityGuideApp has connected to the database"))
    .catch((err) => {
      console.error("Error connecting to database:", err);
      process.exit(1); // Exit the process with an error code on failure
    });
}
