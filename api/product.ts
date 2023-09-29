import express, { Request, Response } from 'express';
export const productRouter = express.Router();
import * as productController from '../controllers/product.controller'

productRouter.post('/product', productController.newProduct);
productRouter.get('/product', productController.getProduct);
productRouter.get('/product/lightnovel', productController.getLightNovel);

productRouter.get('/product/manga', productController.getManga);
productRouter.get('/product/lastest', productController.sortProductLastest);
productRouter.get('/product/sort', productController.sortProduct);
productRouter.get('/product/:slug', productController.getOneProducts);
