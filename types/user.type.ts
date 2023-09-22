import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    _id: string
    name: string;
    email: string;
    password: string;
    avatar?: string;
    created_at: Date;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>('User', userSchema);
