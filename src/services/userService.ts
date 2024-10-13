import bcrypt from 'bcrypt'
import TeacherModel from '../models/teacherModel'
import StudentModel from '../models/studentModel'
import  TeacherDTO  from '../DTO/teacherDto'
import StudentDTO from '../DTO/studentDto'

export const createTeacherFunc = async (teacher: TeacherDTO) => {
    try {
        const { username, password, email} = teacher
        const hashedPassword = await bcrypt.hash(password, 10)
        const dbTeacher = new TeacherModel({
            username,
            password: hashedPassword,
            email,
            class: teacher.class
        })
        await dbTeacher.save()
    } catch (err) {
        throw err
    }
}

export const createStudentFunc = async (Student: StudentDTO) => {
    try {
        const { username, password, email, classId} = Student
        const hashedPassword = await bcrypt.hash(password, 10)
        const dbStudent = new StudentModel({
            username,
            password: hashedPassword,
            email,
            classId
        })
        await dbStudent.save()
    } catch (err) {
        throw err
    }
}