import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function register(req: Request, res: Response): Promise<void> {
    const { name, email, password, confirmPassword } = req.body;

    try {
        const user = await userService.registerUser(name, email, password, confirmPassword);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Registration failed' });
    }
}
export async function profile(req: Request, res: Response) {
    try {
        const user = await userService.getUser(req.headers.cookie);
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send((error));
    }
}
export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const user = await userService.loginUser(email, password);
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send((error));
    }
};
export async function logoutUser(req, res) {
    try {
        // Thực hiện đăng xuất và gửi response OK
        await userService.logoutUser();
        res.status(200).send('OK');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
