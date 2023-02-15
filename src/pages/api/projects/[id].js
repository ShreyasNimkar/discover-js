/* eslint-disable default-case */
import Project from '@/models/projectsModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Protect from '@/utils/protect';

const getProject = async (req, res) => {
  await connectToDB();
  const project = await Project.findById(req.query.id);
  await disconnectFromDB();
  res.status(200).json({
    data: project,
  });
};

const updateProject = Protect(async (req, res) => {
  await connectToDB();
  const project = await Project.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
  });
  await disconnectFromDB();
  res.status(200).json({
    data: project,
  });
});

const deleteProject = Protect(async (req, res) => {
  await connectToDB();
  await Project.findByIdAndDelete(req.query.id);
  await disconnectFromDB();
  res.status(200).json({
    data: null,
  });
});

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProject(req, res);
      break;
    case 'PATCH':
      await updateProject(req, res);
      break;
    case 'DELETE':
      await deleteProject(req, res);
      break;
  }
};

export default handler;
