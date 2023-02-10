import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import AppError from '../managers/AppError.js';
import User from '../models/userModel.js';
import catchAsync from '../managers/catchAsync.js';
import envHandler from '../managers/envHandler.js';

const Protect = func => {
  return catchAsync(async (req, res) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    )
      token = req.headers.authorization.split(' ')[1];
    if (!token)
      throw new AppError(
        'You are not Logged in. Please Login to continue',
        401
      );

    const decoded = await promisify(jwt.verify)(token, envHandler('JWT_KEY'));
    const user = await User.findById(decoded.id);

    if (!user) throw new AppError('User of this token no longer exists', 401);
    if (user.changedPasswordAfter(decoded.iat))
      throw new AppError(
        'Password was recently changed. Please Login again',
        401
      );

    req.user = user;
    return func(req, res);
  });
};

export default Protect;
