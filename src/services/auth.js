import createHttpError from 'http-errors';
import { UserCollection } from '../db/models/User.js';
import bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';
import { SessionCollection } from '../db/models/Session.js';
import {
  accessTokenLifeTime,
  refreshTokenLifeTime,
} from '../constants/auth-constants.js';

export const registerUser = async (payload) => {
  const { email, password } = payload;
  const user = await UserCollection.findOne({ email });

  if (user) throw createHttpError(409, 'Email already exist');

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = UserCollection.create({ ...payload, password: hashPassword });

  return newUser;
};

export const loginUser = async ({ email, password }) => {
  const user = await UserCollection.findOne({ email });

  if (!user) throw createHttpError(401, 'EMail does not exist');

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare)
    throw createHttpError(401, 'The password is not correct');

  return SessionCollection.create({
    userId: user._id,
    accessToken: randomBytes(30).toString('base64'),
    refreshToken: randomBytes(30).toString('base64'),
    accessTokenValidUntil: Date.now() + accessTokenLifeTime,
    refreshTokenValidUntil: Date.now() + refreshTokenLifeTime,
  });
};
