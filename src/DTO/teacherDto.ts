import mongoose from "mongoose";

export default interface TeacherDTO {
    username: string,
    password: string,
    email: string,
    class: mongoose.Types.ObjectId
}