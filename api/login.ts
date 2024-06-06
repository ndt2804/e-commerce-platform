import express, { Request, Response } from 'express';
export const loginRouter = express.Router();
import * as userController from '../controllers/users.controller'
import { auth } from '../middlewares/auth'
import { havePermission } from '../middlewares/role'
loginRouter.post('/login', userController.login);
loginRouter.post('/register', userController.register);
loginRouter.post('/logout', userController.logoutUser);
loginRouter.get('/user/profile', auth, userController.profile);
loginRouter.get('/user/profile/seller', havePermission('seller'), userController.profile);


