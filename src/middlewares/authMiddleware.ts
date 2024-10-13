import { NextFunction, Request, Response } from "express";
import teacherModel from "../models/teacherModel";
import studentModel from "../models/studentModel";
import jwt from 'jsonwebtoken'

export const onlyTeachers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get the token from cookie
    const token = req.cookies.token;
    // verify
    const userData: any = await jwt.verify(token, process.env.TOKEN_SECRET as string);
    if (userData.role !== "Teacher") {
      res.status(403).send("you are not teacher...Im sorry🤷‍♀️")
    }
    // add the user to the req object
    req.body = userData;
    // call next
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
};

export const onlyStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get the token from cookie
    const token = req.cookies.token;
    // verify
    const userData: any = await jwt.verify(token, process.env.TOKEN_SECRET as string);
    if (userData.role !== "Student") {
        res.status(403).send("you are not student...Im sorry🤷‍♀️")
      }
    // add the user to the req object
    req.body = userData;
    // call next
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
};
