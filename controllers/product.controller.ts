import { Request, Response } from 'express';
import * as productServices from '../services/product.service';
export async function newProduct(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    const { name, description, price, image_product, cover, category, publisher, variants } = req.body;
    try {
        const product = await productServices.newProduct(name, description, price, image_product, cover, category, publisher, variants);
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Add New Product failed' });
    }
}
export async function getProduct(req: Request, res: Response): Promise<void> {
    try {
        const product = await productServices.getProduct();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Get Product failed' });
    }
}
export async function sortProductLastest(req: Request, res: Response): Promise<void> {
    try {
        const product = await productServices.sortProductLastest();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Get Product failed' });
    }
}
export async function sortProduct(req: Request, res: Response): Promise<void> {
    try {
        const product = await productServices.sortProduct();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Get Product failed' });
    }
}
export async function getLightNovel(req: Request, res: Response): Promise<void> {
    try {
        const product = await productServices.getLightNovel();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Get Product failed' });
    }
}
export async function getManga(req: Request, res: Response): Promise<void> {
    try {
        const product = await productServices.getManga();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Get Product failed' });
    }
}

export async function getOneProducts(req: Request, res: Response): Promise<void> {
    try {
        const slug = req.params.slug;
        console.log(slug);
        const product = await productServices.getOneProduct(slug);
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Get Product failed' });
    }
}