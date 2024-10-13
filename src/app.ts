import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { errorHandler } from "./middlewares/errorHendler";
import authRouter from "./routes/authRoute";
import userRouter from "./routes/userRoute";
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser())
connectDB();

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)


// Error handling middleware
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}, visit at http://localhost:${port}`);
  });