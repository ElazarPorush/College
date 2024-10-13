import { Router } from "express";
import { createStudent, createTeacher } from "../controllers/userController";
import { onlyStudent, onlyTeachers } from "../middlewares/authMiddleware";

const userRouter = Router();

userRouter.post('/register/teacher', createTeacher)
userRouter.post('/register/student', createStudent)
userRouter.get('/', onlyTeachers, ()=>{})
userRouter.patch('/add-grade/:id', onlyTeachers, ()=>{})
userRouter.patch('/set-grade/:id', onlyTeachers, ()=>{})
userRouter.get('/average', onlyTeachers, ()=>{})
userRouter.get('/average/student/:id', onlyTeachers, ()=>{})
userRouter.get('/average/:subject', onlyTeachers, ()=>{})
userRouter.get('/grade/:id', onlyTeachers, ()=>{})
userRouter.get('/myGrade/:id', onlyStudent, ()=>{})

export default userRouter