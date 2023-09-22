import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

export function checkUserRole(userRole: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const currentUserRole = req.user.role; // Lấy vai trò từ JWT

        if (currentUserRole === userRole) {
            next(); // Cho phép truy cập nếu vai trò của người dùng trùng khớp
        } else {
            res.status(403).json({ message: 'Access denied' }); // Từ chối quyền truy cập
        }
    };
}