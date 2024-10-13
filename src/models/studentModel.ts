import mongoose, { Schema, Document, Types } from "mongoose";

export interface IStudent extends Document {
  _id: Types.ObjectId;
  username: string;
  password: string;
  email: string;
  classId: Types.ObjectId;
  role: string,
  grades: object[]
}

const StudentSchema = new Schema<IStudent>({
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
  classId: {
    type: Schema.Types.ObjectId,
    required: [true, "you need to sign to class!"],
  },
  role: {
    type: String,
    default: "Student"
  },
  grades: [{
    subject: {
        type: String
    },
    grade: {
        type: Number,
        min: [0, "enter a grade between 0 to 100"],
        max: [100, "enter a grade between 0 to 100"]
    }
  }]
});

export default mongoose.model<IStudent>("Student", StudentSchema);
