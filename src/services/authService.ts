import bcrypt from "bcrypt";
import teacherModel from "../models/teacherModel";
import studentModel, { IStudent } from "../models/studentModel";
import jwt from 'jsonwebtoken'
import LoginDTO from "../DTO/loginDto";

export const loginFromService = async (user: LoginDTO) => {
    try {
        let dbUser: any = await teacherModel.findOne({ username: user.username })
        
        if (!dbUser) {
            dbUser = await studentModel.find({username: user.username})
        }
        const password = dbUser.password

        if (!dbUser) throw new Error("User was not found")
        
        if (!await bcrypt.compare(user.password, dbUser.password)) {

            throw new Error("wrong password")
        }
        console.log("dw");
        
        const token = await jwt.sign({
            username: dbUser.username,
            role: dbUser.role
        },
            process.env.TOKEN_SECRET!,
            {
                expiresIn: "3m"
            }
        )

        return token
    } catch (err) {
        console.log(err);
        throw new Error(`${err}`)
    }
}