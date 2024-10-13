"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const errorHendler_1 = require("./middlewares/errorHendler");
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
(0, db_1.default)();
app.use("/api/auth", authRoute_1.default);
app.use("/api/user", userRoute_1.default);
// Error handling middleware
app.use(errorHendler_1.errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}, visit at http://localhost:${port}`);
});
