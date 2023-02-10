/* eslint-disable import/no-unresolved */
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Admin from '@/models/adminModel';
import createSendToken from '@/utils/createSendToken';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  const { name, password } = req.body;
  if (!name || !password)
    return res.status(400).json({
      message: "Password doesn't exists",
    });
  await connectToDB();
  const admin = await Admin.findOne({ name }).select('+password');
  await disconnectFromDB();
  if (!admin || !(await admin.correctPassword(password, admin.password)))
    return res.status(400).json({
      message: 'Incorrect Password',
    });
  createSendToken(admin, 200, res);
}

export default handler;
