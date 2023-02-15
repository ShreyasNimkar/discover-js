/* eslint-disable default-case */
import Message from '@/models/messageModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Protect from '@/utils/protect';

const getAllProjects = async (req, res) => {
  await connectToDB();
  const messages = await Message.find();
  await disconnectFromDB();
  res.status(200).json({
    data: messages,
  });
};

const addProject = Protect(async (req, res) => {
  await connectToDB();
  const message = await Message.create(req.body);
  await disconnectFromDB();
  res.status(200).json({
    data: message,
  });
});

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getAllProjects(req, res);
      break;
    case 'POST':
      await addProject(req, res);
      break;
  }
};

export default handler;
