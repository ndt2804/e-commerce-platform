import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    _id: string
    name: string;
    cover: string;
    description: string;
}

const categorySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    cover: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
});

export default mongoose.model<ICategory>('Categories', categorySchema);
