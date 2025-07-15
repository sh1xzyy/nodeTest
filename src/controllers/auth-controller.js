import { refreshTokenLifeTime } from '../constants/auth-constants.js';
import { loginUser, registerUser } from '../services/auth.js';

export const registerController = async (req, res) => {
  await registerUser(req.body);

  res.json({
    message: 'Successfully register user',
  });
};

export const loginController = async (req, res) => {
  const { userId, accessToken, refreshToken } = await loginUser(req.body);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + refreshTokenLifeTime),
  });

  res.cookie('sessionId', userId, {
    httpOnly: true,
    expires: new Date(Date.now() + refreshTokenLifeTime),
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken,
    },
  });
};
