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
exports.createStudentFunc = exports.createTeacherFunc = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const studentModel_1 = __importDefault(require("../models/studentModel"));
const createTeacherFunc = (teacher) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = teacher;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const dbTeacher = new teacherModel_1.default({
            username,
            password: hashedPassword,
            email,
            class: teacher.class
        });
        yield dbTeacher.save();
    }
    catch (err) {
        throw err;
    }
});
exports.createTeacherFunc = createTeacherFunc;
const createStudentFunc = (Student) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email, classId } = Student;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const dbStudent = new studentModel_1.default({
            username,
            password: hashedPassword,
            email,
            classId
        });
        yield dbStudent.save();
    }
    catch (err) {
        throw err;
    }
});
exports.createStudentFunc = createStudentFunc;
