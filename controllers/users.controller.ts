import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function register(req: Request, res: Response): Promise<void> {
    const { name, email, password, avatar } = req.body;

    try {
        const user = await userService.registerUser(name, email, password, avatar);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Registration failed' });
    }
}
export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const user = await userService.loginUser(email, password);
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send((error));
    }
};
