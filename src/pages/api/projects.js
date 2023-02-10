/* eslint-disable default-case */
import Project from '@/models/projectsModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Protect from '@/utils/protect';

const getAllProjects = async (req, res) => {
  connectToDB();
  const projects = await Project.find();
  disconnectFromDB();
  res.status(200).json({
    data: projects,
  });
};

const addProject = Protect(async (req, res) => {
    connectToDB();
    const project = await Project.create(req.body)
    disconnectFromDB();
    res.status(200).json({
      data: project,
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
