/* eslint-disable default-case */
import Project from '@/models/projectsModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';

const getProject = async (req, res) => {
  connectToDB();
  const project = await Project.findById(req.query.id);
  disconnectFromDB();
  res.status(200).json({
    data: project,
  });
};

const updateProject = async (req, res) => {
  connectToDB();
  const project = await Project.findByIdAndUpdate(req.query.id, req.body);
  disconnectFromDB();
  res.status(200).json({
    data: project,
  });
};

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProject(req, res);
      break;
    case 'PATCH':
      await updateProject(req, res);
      break;
  }
};

export default handler;
