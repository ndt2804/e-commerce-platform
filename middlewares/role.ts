import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

export const SECRET_KEY: Secret = 'hanekodeptrainhatquadat';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}
export const havePermission = (role: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.cookie?.split('=')[1];

            if (!token) {
                throw new Error();
            }
            const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
            const userRole = decoded.role;

            if (userRole === role) {
                (req as CustomRequest).token = decoded;
                next();
            } else {
                res.status(403).send('Access denied');
            }
        } catch (err) {
            res.status(401).send('Please authenticate');
        }
    };
};

