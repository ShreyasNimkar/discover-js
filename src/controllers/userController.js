import User from '../models/userModel.js';
import AppError from '../managers/AppError.js';
import catchAsync from '../managers/catchAsync.js';
import { getAllDocs, getDoc, updateDoc } from '../utils/HandlerFactory.js';
import { createSendToken } from './authController.js';

export const getUser = getDoc(User);

export const updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');
  if (!(await user.correctPassword(req.body.password, user.password)))
    return next(
      new AppError('Incorect Password, Please enter the corrent password', 401)
    );

  user.password = req.body.newPassword;
  user.confirmPassword = req.body.passwordConfirm;
  user.passwordChangedAt = Date.now();
  await user.save();

  createSendToken(user, 200, res);
});