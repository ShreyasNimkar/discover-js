/* eslint-disable default-case */
import Admin from '@/models/adminModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Protect from '@/utils/protect';

const getAdmin = async (req, res) => {
  await connectToDB();
  const admin = await Admin.find({});
  await disconnectFromDB();
  res.status(200).json({
    data: admin[0],
  });
};

const updateAdmin = Protect(async (req, res) => {
  await connectToDB();
  const admin = await Admin.findByIdAndUpdate(req.user.id,req.body, { new: true });
  await disconnectFromDB();
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
