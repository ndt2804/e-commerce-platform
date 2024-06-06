import Category, { ICategory } from '../types/category.type'
export async function newCategory(name: string, cover: string, description: string,): Promise<ICategory> {
    try {
        const newCategory = new Category({
            name,
            cover,
            description,
        });
        return newCategory.save();
    } catch (error) {
        throw error;
    }
}
export async function getCategory(): Promise<ICategory[]> {
    try {
        const getCategory = Category.find({});
        return getCategory
    } catch (error) {
        throw error;
    }
}
