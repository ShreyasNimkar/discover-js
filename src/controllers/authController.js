/* eslint-disable import/prefer-default-export */
import jwt from 'jsonwebtoken';
import envHandler from '../managers/envHandler.js';

export const createSendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, envHandler('JWT_KEY'), {
    expiresIn: envHandler('JWT_TIME') * 24 * 60,
  });
  user.password = undefined;

  const cookieSettings = {
    expires: new Date(
      Date.now() + envHandler('JWT_TIME') * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (envHandler('NODE_ENV') === 'prod') cookieSettings.secure = true;

  res.cookie('token', token, cookieSettings);
  res.status(statusCode).json({
    status: 'success',
    token,
    data: user,
  });
};
