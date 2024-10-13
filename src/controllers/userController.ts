import { Request, Response} from 'express'
import { createStudentFunc, createTeacherFunc } from "../services/userService";
import TeacherDTO  from "../DTO/teacherDto";
import StudentDTO from '../DTO/studentDto';

export const createTeacher = async (req: Request<any, any, TeacherDTO>, res: Response): Promise<void> => {
    try {
        await createTeacherFunc(req.body)
        res.status(201).json({
            massage: "Teacher Created"
        })
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
};

export const createStudent = async (req: Request<any, any, StudentDTO>, res: Response): Promise<void> => {
    try {
        await createStudentFunc(req.body)
        res.status(201).json({
            massage: "Student Created"
        })
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};

export const addGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};

export const setGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getAverage = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getAveragePerStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getAveragePerSubject = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getStudentGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getMyGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};