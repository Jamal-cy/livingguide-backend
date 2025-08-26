import dotenv from "dotenv";
import express from "express";
import corsMiddleware from "./middleware/cors.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";   
import userRoutes from "./routes/user.routes.js";
import livingGuideRoutes from "./routes/livingGuide.routes.js"; 

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

// Parse form data and JSON in POST request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "2mb" }));

// Use cookieParser middleware
app.use(cookieParser());

// 👉👉 Add this block to serve your local images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "../images"))); 
// now your images folder is accessible at http://localhost:4000/images/filename.jpg

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/livingguides", livingGuideRoutes); // updated route path

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  console.error(err);
  res.status(status).json({ message });
});

export default app;
