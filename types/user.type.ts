import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    _id: string
    name: string;
    email: string;
    password: string;
    avatar?: string;
    role: string;
    created_at: Date;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    avatar: { type: String, default: 'null' },
    created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>('User', userSchema);
