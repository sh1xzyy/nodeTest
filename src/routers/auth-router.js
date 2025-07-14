import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerController } from '../controllers/auth-controller.js';
import { validateBody } from '../utils/validateBody.js';
import { registerSchema } from '../validation/authSchema.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);
// authRouter.post('/login', ctrlWrapper());
// authRouter.post('/refresh', ctrlWrapper());
// authRouter.post('/logout', ctrlWrapper());
