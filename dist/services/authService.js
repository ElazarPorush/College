"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginFromService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const studentModel_1 = __importDefault(require("../models/studentModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginFromService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let dbUser = yield teacherModel_1.default.find({ username: user.username });
        if (!dbUser) {
            dbUser = yield studentModel_1.default.find({ username: user.username });
        }
        if (!dbUser)
            throw new Error("User was not found");
        if (!(yield bcrypt_1.default.compare(user.password, dbUser.password))) {
            throw new Error("wrong password");
        }
        const token = yield jsonwebtoken_1.default.sign({
            username: dbUser.username,
            role: dbUser.role
        }, process.env.TOKEN, {
            expiresIn: "3m"
        });
        return token;
    }
    catch (err) {
        console.log(err);
    }
});
exports.loginFromService = loginFromService;
