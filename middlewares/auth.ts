import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const SECRET_KEY: Secret = 'hanekodeptrainhatquadat';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = (req.headers.cookie.split('=')[1]);
        if (!token) {
            throw new Error();

        }
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).send('Please authenticate');
    }
};

