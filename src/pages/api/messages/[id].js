/* eslint-disable default-case */
import Message from '@/models/messageModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';

const deleteMessage = async (req, res) => {
  connectToDB();
  await Message.findByIdAndDelete(req.query.id, req.body);
  disconnectFromDB();
  res.status(200).json({
    data: null,
  });
};

const handler = async (req, res) => {
  switch (req.method) {
    case 'DELETE':
      await deleteMessage(req, res);
      break;
  }
};

export default handler;
