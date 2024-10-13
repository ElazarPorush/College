"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.post('/register/teacher', userController_1.createTeacher);
userRouter.post('/register/student', userController_1.createStudent);
userRouter.get('/', () => { }, () => { });
userRouter.patch('/add-grade/:id', () => { }, () => { });
userRouter.patch('/set-grade/:id', () => { }, () => { });
userRouter.get('/average', () => { }, () => { });
userRouter.get('/average/student/:id', () => { }, () => { });
userRouter.get('/average/:subject', () => { }, () => { });
userRouter.get('/grade/:id', () => { }, () => { });
userRouter.get('/myGrade/:id', () => { });
exports.default = userRouter;
