import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITeacher extends Document {
  _id: Types.ObjectId;
  username: string;
  password: string;
  email: string;
  class: object;
}

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
  class: {
    type: {
        name: {
            type: String,
            required: [true, "class name must be provide"],
            unique: true
        },
        students: [Schema.Types.ObjectId]
    }
  },
  
});

export default mongoose.model<ITeacher>("Teacher", TeacherSchema);
