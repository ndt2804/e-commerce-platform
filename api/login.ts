import express, { Request, Response } from 'express';
export const loginRouter = express.Router();

loginRouter.get("/login", (req: Request, res: Response) => {
    res.send('Login');
});
// loginRouter.post("/store", LicenseController.createLicense);
