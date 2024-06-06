import mongoose, { Schema, Document } from 'mongoose';
import { ICategory } from './category.type';
import { IPublisher } from './publisher.type';

export interface IProduct extends Document {
    _id: string
    name: string;
    description: string;
    price: number;
    image_product: [string];
    cover: string;
    slug: string;
    created_at: Date;
    category: ICategory;
    publisher: IPublisher;
    variants: {
        type: string;
        price: number;
        quantity: number;
    }[];
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    cover: { type: String, required: true },
    image_product: [{ type: String, required: true }],
    slug: { type: String, slug: 'name', unique: true },
    created_at: { type: Date },
    category: { type: Schema.Types.ObjectId, ref: 'Categories', required: true },
    publisher: { type: Schema.Types.ObjectId, ref: 'Publisher', required: true },
    variants: [
        {
            type: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },]
});

export default mongoose.model<IProduct>('Product', productSchema);
