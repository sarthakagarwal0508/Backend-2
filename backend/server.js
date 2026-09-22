const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());  // Middleware

connectDB();   // Database

app.use("/api/auth", authRoutes);   // API Routes

app.use(errorHandler);  // Error Handler

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});