import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import Admin from '@/models/adminModel.js';
import envHandler from '@/managers/envHandler';
import { connectToDB, disconnectFromDB } from '@/managers/DB';

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
  await connectToDB();
  const user = await Admin.findById(decoded.id);

  if (!user)
    return res.status(401).json({
      message: 'Admin of this token not found.',
    });

  await disconnectFromDB();

  req.user = user;
  return func(req, res);
};

export default Protect;
