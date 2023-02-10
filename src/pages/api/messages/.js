/* eslint-disable default-case */
import Message from '@/models/messageModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';

const getAllProjects = async (req, res) => {
  connectToDB();
  const messages = await Message.find();
  disconnectFromDB();
  res.status(200).json({
    data: messages,
  });
};

const addProject = async (req, res) => {
    connectToDB();
    const message = await Message.create(req.body)
    disconnectFromDB();
    res.status(200).json({
      data: message,
    });
  };

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
