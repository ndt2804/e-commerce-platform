import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    _id: string
    name: string;
}

const categorySchema: Schema = new Schema({
    name: { type: String, required: true },
});

export default mongoose.model<ICategory>('Categories', categorySchema);
