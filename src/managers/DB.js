import mongoose from 'mongoose';
import { DEV_DATABASE_URL } from '../../constants.js';
import envHandler from './envHandler.js';

const URL =
  envHandler('NODE_ENV') === 'dev'
    ? DEV_DATABASE_URL
    : envHandler('DATABASE_URL').replace(
        '<password>',
        envHandler('DATABASE_PASSWORD')
      );

export const connectToDB = () =>{
  if (mongoose.connections[0].readyState) {
    console.log('Connected');
    return
  }
  mongoose.connect(URL).then(() => console.log('Connected to Database!'));
}

export const disconnectFromDB = () =>{
  mongoose.disconnect().then(()=>{
    console.log("Disconnected from Database.")
  });
}
