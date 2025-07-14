import { model, Schema } from 'mongoose';
import { emailRegExp } from '../../constants/auth-constants.js';

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      match: emailRegExp,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

export const UserCollection = model('user-movie', userSchema);
