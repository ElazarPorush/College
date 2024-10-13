import { Request, Response } from "express";
import { loginFromService } from "../services/authService";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = await loginFromService(req.body);
        res.cookie("token", token);
        res.json({
          message: `welcome ${req.body.username}! so good to see you!!`,
        });
      } catch (err: any) {
        res.status(400).send(err.message);
      }
};