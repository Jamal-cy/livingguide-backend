import dotenv from "dotenv";
import express from "express";
import corsMiddleware from "./middleware/cors.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import cityRoutes from "./routes/city.routes.js";

// Load environment variables if not in production
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// Initialize Express application
const app = express();

// Use Morgan for logging HTTP requests
app.use(morgan("dev"));

// Use the CORS middleware
app.use(corsMiddleware);

app.options("*", corsMiddleware);

// To parse form data in POST request body
app.use(express.urlencoded({ extended: true }));

// To parse incoming JSON in POST request body
app.use(express.json({ limit: "2mb" }));

// Use cookieParser middleware
app.use(cookieParser());

// Favorite product-relatd routes
app.use("/api/auth", userRoutes);

app.use("/api/city", cityRoutes);

// Error handling middleware
app.use((err, res) => {
  // Extract status and message from the error object, defaulting to 500 and a generic message
  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  // Log the error details to the console for debugging
  console.error(err);

  // Send the error response to the client
  res.status(status).json({ message });
});

export default app;
