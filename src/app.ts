import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// app.use(express.json());

connectDB();

app.use("/api/auth", () => {})
app.use("/api/user", () => {})

app.listen(port, () => {
    console.log(`Server is running on port ${port}, visit at http://localhost:${port}`);
  });