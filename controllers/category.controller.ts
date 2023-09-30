import { Request, Response } from 'express';
import * as categoryServices from '../services/category.service';

export async function newCategory(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    const { name, cover, description } = req.body;
    try {
        const product = await categoryServices.newCategory(name, cover, description);
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Add New Product failed' });
    }
}
export async function getCategory(req: Request, res: Response): Promise<void> {
    try {
        const product = await categoryServices.getCategory();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Add New Product failed' });
    }
}