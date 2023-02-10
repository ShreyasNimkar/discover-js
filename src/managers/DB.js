import mongoose from 'mongoose';
import { DEV_DATABASE_URL } from 'constants.js';
import envHandler from './envHandler.js';

const URL =
  envHandler('NODE_ENV') === 'development'
    ? DEV_DATABASE_URL
    : envHandler('DATABASE_URL').replace(
        '<password>',
        envHandler('DATABASE_PASSWORD')
      );

export const connectToDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Connected');
    return;
  }
  await mongoose.connect(URL);
  console.log('Connected to Database!')
};

export const disconnectFromDB = async() => {
  await mongoose.disconnect();
  console.log('Disconnected from Database.');
};
