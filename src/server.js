import dotenv from "dotenv";
dotenv.config(); // Load .env first

import app from "./app.js";
import connectDb from "./config/db.js";

const PORT = process.env.PORT || 4000;

// Connect to the database
connectDb();

app.listen(PORT, () => {
  console.log(`LivingGuideApp server is running on http://localhost:${PORT}`);
});
