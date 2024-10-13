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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyGrade = exports.getStudentGrade = exports.getAveragePerSubject = exports.getAveragePerStudent = exports.getAverage = exports.setGrade = exports.addGrade = exports.getStudents = exports.createStudent = exports.createTeacher = void 0;
const userService_1 = require("../services/userService");
const createTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, userService_1.createTeacherFunc)(req.body);
        res.status(201).json({
            massage: "Teacher Created"
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
exports.createTeacher = createTeacher;
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, userService_1.createStudentFunc)(req.body);
        res.status(201).json({
            massage: "Student Created"
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.createStudent = createStudent;
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.getStudents = getStudents;
const addGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.addGrade = addGrade;
const setGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.setGrade = setGrade;
const getAverage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.getAverage = getAverage;
const getAveragePerStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.getAveragePerStudent = getAveragePerStudent;
const getAveragePerSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.getAveragePerSubject = getAveragePerSubject;
const getStudentGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.getStudentGrade = getStudentGrade;
const getMyGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(400).json(err);
    }
});
exports.getMyGrade = getMyGrade;
