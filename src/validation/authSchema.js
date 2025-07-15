import Joi from 'joi';
import { emailRegExp } from '../constants/auth-constants.js';

export const registerSchema = Joi.object({
  userName: Joi.string().min(2).max(50).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).max(128).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).max(128).required(),
});
