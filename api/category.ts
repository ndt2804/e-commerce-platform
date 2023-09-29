import express, { Request, Response } from 'express';
export const categoryRouter = express.Router();
import * as categoryController from '../controllers/category.controller'

categoryRouter.post('/category', categoryController.newCategory);
categoryRouter.get('/category', categoryController.getCategory);


