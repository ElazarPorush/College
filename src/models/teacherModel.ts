import mongoose, { Schema, Document, Types } from "mongoose";
import Student from "./studentModel"

interface IClass extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  students: mongoose.Types.ObjectId[];
}

export interface ITeacher extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
  password: string;
  email: string;
  role: string
  class: IClass;
}

const classSchema = new Schema<IClass>({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    unique: true,
  },
  students: {
    type: [mongoose.Types.ObjectId],
    ref: Student
  },
});


const TeacherSchema = new Schema<ITeacher>({
  username: {
    type: String,
    required: [true, "Please enter your name"],
    unique: true,
    minlength: [3, "Too short name"]
  },
  password: {
    type: String,
    required: [true, "password is required"]
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true
  },
  role: {
    type: String,
    default: "Teacher"
  },
  class: {
    type: classSchema
  },
  
});

export default mongoose.model<ITeacher>("Teacher", TeacherSchema);
