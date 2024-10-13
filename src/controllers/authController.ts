import { Request, Response } from "express";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
};