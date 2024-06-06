import express, { Request, Response } from 'express';
export const publisherRouter = express.Router();
import * as publisherController from '../controllers/publisher.controller'

publisherRouter.post('/publisher', publisherController.newPublisher);
publisherRouter.get('/publisher', publisherController.getPublisher);


