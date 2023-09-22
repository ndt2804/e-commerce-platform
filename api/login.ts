import express, { Request, Response } from 'express';
export const loginRouter = express.Router();
import * as userController from '../controllers/users.controller'
import { auth } from '../middlewares/auth'

loginRouter.post('/login', userController.login);
loginRouter.post('/register', userController.register);
