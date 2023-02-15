/* eslint-disable default-case */
import Message from '@/models/messageModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Protect from '@/utils/protect';

const deleteMessage = Protect(async (req, res) => {
  await connectToDB();
  await Message.findByIdAndDelete(req.query.id);
  await disconnectFromDB();
  res.status(200).json({
    data: null,
  });
});

const handler = async (req, res) => {
  switch (req.method) {
    case 'DELETE':
      await deleteMessage(req, res);
      break;
  }
};

export default handler;
