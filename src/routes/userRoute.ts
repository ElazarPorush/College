import { Router } from "express";
import { createStudent, createTeacher } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/register/teacher', createTeacher)
userRouter.post('/register/student', createStudent)
userRouter.get('/', ()=>{}, ()=>{})
userRouter.patch('/add-grade/:id', ()=>{}, ()=>{})
userRouter.patch('/set-grade/:id', ()=>{}, ()=>{})
userRouter.get('/average', ()=>{}, ()=>{})
userRouter.get('/average/student/:id', ()=>{}, ()=>{})
userRouter.get('/average/:subject', ()=>{}, ()=>{})
userRouter.get('/grade/:id', ()=>{}, ()=>{})
userRouter.get('/myGrade/:id', ()=>{})

export default userRouter