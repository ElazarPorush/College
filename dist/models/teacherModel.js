"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const studentModel_1 = __importDefault(require("./studentModel"));
const classSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        unique: true,
    },
    students: {
        type: [mongoose_1.default.Types.ObjectId],
        ref: studentModel_1.default
    },
});
const TeacherSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, "Please enter your name"],
        unique: true,
        minlength: [3, "Too short name"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    email: {
        type: String,
        required: [true, "please enter an email"],
        unique: true
    },
    role: {
        type: String,
        default: "Teacher"
    },
    class: {
        type: classSchema
    },
});
exports.default = mongoose_1.default.model("Teacher", TeacherSchema);
