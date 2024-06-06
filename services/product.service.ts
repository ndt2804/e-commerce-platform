import Product, { IProduct } from '../types/product.type'
import { ICategory } from '../types/category.type'
import { IPublisher } from '../types/publisher.type';
import { slugify } from '../configs/slug.config';

export async function newProduct(name: string, description: string, price: number, image_product: [string], cover: string, category: ICategory, publisher: IPublisher, variants): Promise<IProduct> {
    try {
        const slug = slugify(name);
        const created_at = Date.now();
        const newProduct = new Product({
            name,
            description,
            price,
            image_product,
            cover,
            category,
            publisher,
            variants,
            slug,
            created_at,
        });
        return newProduct.save();
    } catch (error) {
        throw error;
    }
}
export async function getProduct(): Promise<IProduct[]> {
    try {
        const products = await Product.find({}).populate('category').populate('publisher').sort({ created_at: -1 });

        return products;
    } catch (error) {
        throw error;
    }
}
export async function sortProductLastest(): Promise<IProduct[]> {
    try {
        const products = await Product.find({}).populate('category').populate('publisher')
            .sort({ created_at: -1 })
            .limit(1);
        return products;
    } catch (error) {
        throw error;
    }
}
export async function sortProduct(): Promise<IProduct[]> {
    try {
        const products = await Product.find({}).populate('category').populate('publisher')
            .sort({ created_at: -1 })
            .limit(5);
        return products;
    } catch (error) {
        throw error;
    }
}
export async function getLightNovel(): Promise<IProduct[]> {
    try {
        const products = await Product.find({}).populate('category').populate('publisher');
        const lightNovelProduct = products.filter(product => product.category.name === "Light Novel");

        return lightNovelProduct;
    } catch (error) {
        throw error;
    }
}
export async function getManga(): Promise<IProduct[]> {
    try {
        const products = await Product.find({}).populate('category').populate('publisher');
        const mangaProduct = products.filter(product => product.category.name === "Manga");

        return mangaProduct;
    } catch (error) {
        throw error;
    }
}
export async function getOneProduct(slug: string): Promise<IProduct | null> {
    try {
        const product = await Product.findOne({ slug }).populate('category').populate('publisher');
        return product;
    } catch (error) {
        throw error;
    }
}
