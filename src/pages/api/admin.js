/* eslint-disable default-case */
import User from '@/models/userModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Protect from '@/utils/protect';

const getAdmin = async (req, res) => {
  connectToDB();
  const admin = await User.find({})[0];
  disconnectFromDB();
  res.status(200).json({
    data: admin,
  });
};

const updateAdmin = Protect(async (req, res) => {
  connectToDB();
  const admin = await req.user.update(req.body, { new: true });
  disconnectFromDB();
  res.status(200).json({
    data: admin,
  });
});

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getAdmin(req, res);
      break;
    case 'PATCH':
      await updateAdmin(req, res);
      break;
  }
};

export default handler;
