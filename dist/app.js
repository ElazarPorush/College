"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import connectDB from "./config/db";
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
// app.use(express.json());
// connectDB();
app.use("/api/auth", () => { });
app.use("/api/user", () => { });
app.listen(port, () => {
    console.log(`Server is running on port ${port}, visit at http://localhost:${port}`);
});
