/* eslint-disable import/no-unresolved */
import { connectToDB, disconnectFromDB } from '../../managers/DB';
import { createSendToken } from '@/controllers/authController';
import User from '@/models/userModel';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  connectToDB();
  const newUser = await User.create(req.body);
  disconnectFromDB();
  createSendToken(newUser, 201, res);
}

export default handler;
