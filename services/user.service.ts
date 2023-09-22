import User, { IUser } from '../types/user.type'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../middlewares/auth';


export async function registerUser(name: string, email: string, password: string, avatar?: string): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        avatar,
    });

    return user.save();
}

export async function loginUser(email: string, password: string): Promise<any | null> {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Name of user is not correct');
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ _id: user._id?.toString(), email: user.email }, SECRET_KEY, {
                expiresIn: '2 days',
            });

            return { user: { _id: user._id, email: user.email }, token: token };
        } else {
            throw new Error('Password is not correct');
        }
    } catch (error) {
        throw error;
    }
}

