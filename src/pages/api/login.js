/* eslint-disable import/no-unresolved */
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Admin from '@/models/adminModel';
import createSendToken from '@/utils/createSendToken';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  const { name, password } = req.body;
  if (!name || !password)
    res.status(400).json({
      message: "Password doesn't exists",
    });
  else {
    await connectToDB();
    const admin = await Admin.findOne({ name }).select('+password');
    await disconnectFromDB();
    if (!admin || !(await admin.correctPassword(password, admin.password)))
      res.status(400).json({
        message: 'Incorrect Password',
      });
    else createSendToken(admin, 200, res);
  }
}

export default handler;
