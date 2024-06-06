import mongoose, { Document, Schema } from 'mongoose';

export interface IVariant extends Document {
    _id: number;
    type: string;
    price: number;
    quantity: number;
}

const variantSchema: Schema = new mongoose.Schema({
    type: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const Variant = mongoose.model<IVariant>('Variant', variantSchema);

export default Variant;
