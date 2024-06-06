import { Request, Response } from 'express';
import * as publisherServices from '../services/publisher.service';

export async function newPublisher(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    const { name, cover, description } = req.body;
    try {
        const product = await publisherServices.newPublisher(name, cover, description);
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Add New Publisher failed' });
    }
}
export async function getPublisher(req: Request, res: Response): Promise<void> {
    try {
        const product = await publisherServices.getPublisher();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Get Publisher failed' });
    }
}