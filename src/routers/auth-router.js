import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginController,
  registerController,
} from '../controllers/auth-controller.js';
import { validateBody } from '../utils/validateBody.js';
import { loginSchema, registerSchema } from '../validation/authSchema.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);
authRouter.post(
  '/login',
  validateBody(loginSchema),
  ctrlWrapper(loginController),
);
// authRouter.post('/refresh', ctrlWrapper());
// authRouter.post('/logout', ctrlWrapper());
