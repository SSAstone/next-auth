import mongoose, { Document, Schema, models } from 'mongoose';

// export interface user extends Document {
//     username: string;
//     email: string;
//     password: string;
// }

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String
    }
}, { timestamps: true });

const User =  models.User || mongoose.model('User', userSchema);

export default User