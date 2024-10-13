import bcrypt from "bcrypt";
import teacherModel from "../models/teacherModel";
import studentModel from "../models/studentModel";
import jwt from 'jsonwebtoken'
import LoginDTO from "../DTO/loginDto";

export const loginFromService = async (user: LoginDTO) => {
    try {
        let dbUser: any = await teacherModel.find({ username: user.username })

        if (!dbUser) {
            dbUser = await studentModel.find({username: user.username})
        }
        if (!dbUser) throw new Error("User was not found")

        if (!await bcrypt.compare(user.password, dbUser.password)) {
            throw new Error("wrong password")
        }

        const token = await jwt.sign({
            username: dbUser.username,
            role: dbUser.role
        },
            process.env.TOKEN as string,
            {
                expiresIn: "3m"
            }
        )
        return token
    } catch (err) {
        console.log(err);
    }
}