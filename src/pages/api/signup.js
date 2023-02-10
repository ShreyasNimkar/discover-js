/* eslint-disable import/no-unresolved */
import { connectToDB, disconnectFromDB } from '../../managers/DB';
import createSendToken from '@/utils/createSendToken';
import User from '@/models/userModel';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  connectToDB();
  const users = await User.find({});
  if (users.length > 0)
    res.status(401).json({
      message: 'There can only be one admin on this site',
    });
  const newUser = await User.create(req.body);
  disconnectFromDB();
  createSendToken(newUser, 201, res);
}

export default handler;
