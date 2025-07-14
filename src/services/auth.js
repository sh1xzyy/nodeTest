import createHttpError from 'http-errors';
import { UserCollection } from '../db/models/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
  const { email, password } = payload;
  const user = await UserCollection.findOne({ email });

  if (user) throw createHttpError(409, 'Email already exist');

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = UserCollection.create({ ...payload, password: hashPassword });

  return newUser;
};
