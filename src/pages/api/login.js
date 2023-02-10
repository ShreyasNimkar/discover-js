/* eslint-disable import/no-unresolved */
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import User from '@/models/userModel';
import createSendToken from '@/utils/createSendToken';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  const { email, password } = req.body;
  if (!email || !password)
    res.status(400).json({
      message: "Email or Password doesn't exists",
    });
  connectToDB();
  const user = await User.findOne({ email }).select('+password');
  disconnectFromDB();
  if (!user || !(await user.correctPassword(password, user.password)))
    res.status(400).json({
      message: 'Incorrect Email or Password',
    });
  createSendToken(user, 200, res);
}

export default handler;
