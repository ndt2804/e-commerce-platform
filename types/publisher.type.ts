import mongoose, { Schema, Document } from 'mongoose';

export interface IPublisher extends Document {
    _id: string
    name: string;
    cover: string;
    description: string;
}

const publisherSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    cover: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
});

export default mongoose.model<IPublisher>('Publisher', publisherSchema);
