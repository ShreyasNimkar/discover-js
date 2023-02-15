import { connectToDB, disconnectFromDB } from '@/managers/DB';
import createSendToken from '@/utils/createSendToken';
import Admin from '@/models/adminModel';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  await connectToDB();
  const users = await Admin.find({});
  if (users.length > 0)
    return res.status(401).json({
      message: 'There can only be one admin on this site',
    });

  if (req.body.password !== req.body.confirmPassword)
    return res.status(401).json({
      message: 'Passwords do not match.',
    });

  const newUser = await Admin.create(req.body);
  createSendToken(newUser, 201, res);
  await disconnectFromDB();
}

export default handler;
