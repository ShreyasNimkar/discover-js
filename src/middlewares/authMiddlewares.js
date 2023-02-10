import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/userModel.js';
import envHandler from '../managers/envHandler.js';

const Protect = (func) => async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  )
    // eslint-disable-next-line prefer-destructuring
    token = req.headers.authorization.split(' ')[1];
  if (!token)
    return res.status(401).json({
      message: 'You are not logged in.',
    });

  const decoded = await promisify(jwt.verify)(token, envHandler('JWT_KEY'));
  const user = await User.findById(decoded.id);

  if (!user)
    return res.status(401).json({
      message: 'User of this token not found.',
    });
  if (user.changedPasswordAfter(decoded.iat))
    return res.status(401).json({
      message: 'Password was recently changed, please login again.',
    });

  req.user = user;
  return func(req, res);
};

export default Protect;
